import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Divider, Box } from '@mui/material';

const ProyectoForm = () => {
  const [ubicacion, setUbicacion] = useState('');
  const [cantidadMuebles, setCantidadMuebles] = useState(1);
  const [muebles, setMuebles] = useState([
    {
      Alto_Cm: '',
      Ancho_interno_Cm: '',
      Divisiones: '',
      Voltaje_V: '',
      Consumo_W_por_Mt: '',
      Porcentaje_de_uso_del_driver: ''
    }
  ]);
  const [resultados, setResultados] = useState(null);
  const [totales, setTotales] = useState(null);

  const handleMuebleChange = (index, field, value) => {
    const nuevosMuebles = [...muebles];
    nuevosMuebles[index][field] = value;
    setMuebles(nuevosMuebles);
  };

  const agregarMueble = () => {
    setMuebles([...muebles, {
      Alto_Cm: '',
      Ancho_interno_Cm: '',
      Divisiones: '',
      Voltaje_V: '',
      Consumo_W_por_Mt: '',
      Porcentaje_de_uso_del_driver: ''
    }]);
  };

  // Calcula los totales localmente
  const calcularTotales = () => {
    let total_metros_led = 0;
    let consumo_total_w = 0;

    muebles.forEach(mueble => {
      const anchoCm = parseFloat(mueble.Ancho_interno_Cm) || 0;
      const divisiones = parseInt(mueble.Divisiones) || 0;
      const consumoW = parseFloat(mueble.Consumo_W_por_Mt) || 0;

      const metros = (anchoCm / 100) * divisiones;
      const consumototal = metros * consumoW;
      total_metros_led += metros;
      consumo_total_w += consumototal;
    });

    // Tomar el porcentaje de uso del primer mueble (o puedes agregar un campo global)
    const porcentajeUso = (parseFloat(muebles[0]?.Porcentaje_de_uso_del_driver) || 100) / 100;
    // Calcular el driver recomendado para el consumo total
    const driver_recomendado = porcentajeUso > 0 ? (consumo_total_w / porcentajeUso) : 0;

    return {
      total_metros_led: total_metros_led.toFixed(2),
      consumo_total_w: consumo_total_w.toFixed(2),
      driver_recomendado: driver_recomendado.toFixed(2)
    };
  };

  const handleCalcularTotales = () => {
    setTotales(calcularTotales());
  };

  const enviarProyecto = async () => {
    const data = {
      ubicacion,
      cantidad_muebles: parseInt(cantidadMuebles),
      muebles: muebles.map(m => ({
        alto_cm: parseFloat(m.Alto_Cm),
        ancho_interno_cm: parseFloat(m.Ancho_interno_Cm),
        divisiones: parseInt(m.Divisiones),
        voltaje_v: parseFloat(m.Voltaje_V),
        consumo_w_per_m: parseFloat(m.Consumo_W_por_Mt),
        Porcentaje_de_uso_del_driver: parseFloat(m.Porcentaje_de_uso_del_driver)
      }))
    };

    try {
      const res = await fetch('/api/proyectos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const resultado = await res.json();
      setResultados(resultado);
    } catch (error) {
      console.error('Error al enviar proyecto', error);
    }
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        py: 4,
        my: 4,
        bgcolor: 'background.paper'
      }}
    >
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Calculadora de Tiras LED para Muebles
      </Typography>

      {/* Formulario principal */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Datos del Proyecto
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              label="Ubicación del mueble"
              value={ubicacion}
              onChange={e => setUbicacion(e.target.value)}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Cantidad de muebles"
              type="number"
              value={cantidadMuebles}
              onChange={e => setCantidadMuebles(e.target.value)}
              margin="normal"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Box>

      {/* Lista de muebles */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Información de cada mueble
        </Typography>
        {muebles.map((mueble, index) => (
          <Paper
            key={index}
            sx={{
              padding: 2,
              marginTop: 2,
              borderRadius: 2,
              bgcolor: 'background.default'
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
              Mueble #{index + 1}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  sx={{ width: 220 }}
                  size='small'
                  fullWidth
                  label="Alto (mt)"
                  type="number"
                  value={mueble.Alto_Cm}
                  onChange={e => handleMuebleChange(index, 'Alto_Cm', e.target.value)}
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  sx={{ width: 220 }}
                  size='small'
                  fullWidth
                  label="Ancho interno (cm)"
                  type="number"
                  value={mueble.Ancho_interno_Cm}
                  onChange={e => handleMuebleChange(index, 'Ancho_interno_Cm', e.target.value)}
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  sx={{ width: 220 }}
                  size='small'
                  fullWidth
                  label="Divisiones"
                  type="number"
                  value={mueble.Divisiones}
                  onChange={e => handleMuebleChange(index, 'Divisiones', e.target.value)}
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  sx={{ width: 220 }}
                  size='small'
                  fullWidth
                  label="Voltaje (V)"
                  type="number"
                  value={mueble.Voltaje_V}
                  onChange={e => handleMuebleChange(index, 'Voltaje_V', e.target.value)}
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  sx={{ width: 220 }}
                  size='small'
                  fullWidth
                  label="Consumo (W por metro)"
                  type="number"
                  value={mueble.Consumo_W_por_Mt}
                  onChange={e => handleMuebleChange(index, 'Consumo_W_por_Mt', e.target.value)}
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  sx={{ width: 220 }}
                  size='small'
                  fullWidth
                  label="% Uso del driver"
                  type="number"
                  value={mueble.Porcentaje_de_uso_del_driver}
                  onChange={e => handleMuebleChange(index, 'Porcentaje_de_uso_del_driver', e.target.value)}
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
            </Grid>
          </Paper>
        ))}
        <Button
          variant="outlined"
          onClick={agregarMueble}
          sx={{ mt: 2 }}
        >
          Agregar Mueble
        </Button>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* Acciones */}
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={enviarProyecto}
        >
          Calcular (enviar)
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleCalcularTotales}
        >
          Calcular Totales Localmente
        </Button>
      </Box>

      {/* Mostrar información ingresada */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Resumen de datos ingresados
        </Typography>
        <Typography>Ubicación: <b>{ubicacion}</b></Typography>
        <Typography>Cantidad de muebles: <b>{cantidadMuebles}</b></Typography>
        <Typography>Muebles:</Typography>
        <ul>
          {muebles.map((m, idx) => (
            <li key={idx}>
              Alto: {m.Alto_Cm} mt, Ancho interno: {m.Ancho_interno_Cm} cm, Divisiones: {m.Divisiones}, Voltaje: {m.Voltaje_V} V, Consumo: {m.Consumo_W_por_Mt} W/mt, % Uso driver: {m.Porcentaje_de_uso_del_driver}
            </li>
          ))}
        </ul>
      </Box>

      {/* Resultados locales */}
      {totales && (
        <Paper
          sx={{
            padding: 2,
            marginTop: 4,
            borderRadius: 2,
            bgcolor: 'background.default'
          }}
        >
          <Typography variant="h6" fontWeight="bold">Totales Locales</Typography>
          <Typography>Total Metros LED: <b>{totales.total_metros_led}</b></Typography>
          <Typography>Consumo Total (W): <b>{totales.consumo_total_w}</b></Typography>
          <Typography>Driver Recomendado (W): <b>{totales.driver_recomendado}</b></Typography>
        </Paper>
      )}

      {/* Resultados del backend */}
      {resultados && (
        <Paper
          sx={{
            padding: 2,
            marginTop: 4,
            borderRadius: 2,
            bgcolor: 'background.default'
          }}
        >
          <Typography variant="h5" fontWeight="bold">Resultados del Servidor</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Ubicación</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Total Metros LED</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Consumo Total (W)</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Voltaje Driver</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Potencia Driver (W)</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Muebles por Driver</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{resultados.ubicacion}</TableCell>
                <TableCell>{resultados.total_metros_led}</TableCell>
                <TableCell>{resultados.consumo_total_w}</TableCell>
                <TableCell>{resultados.driver_recomendado?.voltaje_v}</TableCell>
                <TableCell>{resultados.driver_recomendado?.potencia_w}</TableCell>
                <TableCell>{resultados.muebles_por_driver}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      )}
    </Container>
  );
};

export default ProyectoForm;