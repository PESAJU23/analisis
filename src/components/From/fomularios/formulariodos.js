import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Card, CardContent } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FormularioDos() {
    const [numeroSujeto, setNumeroSujeto] = useState('');
    const [formData, setFormData] = useState({
        numero_del_sujeto: '',
        Fecha: '',
        Hora: '',
        Ubicación: '',
        Accion_Final: '',
        Comportamientos_Previos: '',
        Duracion: '',
        Frecuencia: '',
        Estado_Emocional: '',
        Notas: '',
    });
    const [mensaje, setMensaje] = useState('');

    // Buscar sujeto por número
    const buscarSujeto = async () => {
        try {
            const respuesta = await fetch(`http://localhost:5000/api/data/subject/${numeroSujeto}`);
            if (!respuesta.ok) {
                if (respuesta.status === 404) {
                    throw new Error('Sujeto no encontrado');
                } else {
                    throw new Error('Error al buscar el sujeto');
                }
            }
            const data = await respuesta.json();
            setFormData(data);
            setMensaje('');
        } catch (error) {
            setMensaje(error.message);
        }
    };

    // Actualizar datos del sujeto
    const actualizarDatos = async (e) => {
        e.preventDefault();
        const fechaFormateada = formData.Fecha.split('T')[0];
        const datosActualizados = {
            ...formData,
            Fecha: fechaFormateada,
        };

        try {
            const respuesta = await fetch(`http://localhost:5000/api/data/${formData.ID}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datosActualizados),
            });
            if (!respuesta.ok) {
                throw new Error('Error al actualizar los datos');
            }
            toast.success('Datos actualizados correctamente');
        } catch (error) {
            toast.error('Error al actualizar los datos');
        }
    };

    // Manejar cambios en los campos del formulario
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    return (
        <Container maxWidth="md" sx={{ marginTop: '20px' }}>
            <ToastContainer />
            <Card
                variant="outlined"
                sx={{
                    bgcolor: 'background.paper',
                    color: 'text.primary',
                    borderRadius: 3,
                    boxShadow: 3,
                }}
            >
                <CardContent>
                    <Typography variant="h4" gutterBottom align="center" fontWeight="bold">
                        Actualizar Datos del Sujeto
                    </Typography>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                        <TextField
                            label="Número de Sujeto"
                            variant="outlined"
                            fullWidth
                            value={numeroSujeto}
                            onChange={(e) => setNumeroSujeto(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={buscarSujeto}
                        >
                            Buscar
                        </Button>
                    </div>
                    {mensaje && (
                        <Typography color="error" sx={{ marginBottom: '20px' }}>
                            {mensaje}
                        </Typography>
                    )}
                    {formData.numero_del_sujeto && (
                        <form onSubmit={actualizarDatos}>
                            <TextField
                                id="Fecha"
                                label="Fecha"
                                type="date"
                                variant="outlined"
                                fullWidth
                                sx={{ mb: 2 }}
                                InputLabelProps={{ shrink: true }}
                                value={formData.Fecha}
                                onChange={handleChange}
                            />
                            <TextField
                                id="Hora"
                                label="Hora"
                                type="time"
                                variant="outlined"
                                fullWidth
                                sx={{ mb: 2 }}
                                InputLabelProps={{ shrink: true }}
                                value={formData.Hora}
                                onChange={handleChange}
                            />
                            <TextField
                                id="Ubicación"
                                label="Ubicación"
                                variant="outlined"
                                fullWidth
                                sx={{ mb: 2 }}
                                value={formData.Ubicación}
                                onChange={handleChange}
                            />
                            <TextField
                                id="Accion_Final"
                                label="Acción Final"
                                variant="outlined"
                                fullWidth
                                sx={{ mb: 2 }}
                                value={formData.Accion_Final}
                                onChange={handleChange}
                            />
                            <TextField
                                id="Comportamientos_Previos"
                                label="Comportamientos Previos"
                                variant="outlined"
                                fullWidth
                                sx={{ mb: 2 }}
                                value={formData.Comportamientos_Previos}
                                onChange={handleChange}
                            />
                            <TextField
                                id="Duracion"
                                label="Duración"
                                type="number"
                                variant="outlined"
                                fullWidth
                                sx={{ mb: 2 }}
                                value={formData.Duracion}
                                onChange={handleChange}
                            />
                            <TextField
                                id="Frecuencia"
                                label="Frecuencia"
                                type="number"
                                variant="outlined"
                                fullWidth
                                sx={{ mb: 2 }}
                                value={formData.Frecuencia}
                                onChange={handleChange}
                            />
                            <TextField
                                id="Estado_Emocional"
                                label="Estado Emocional"
                                variant="outlined"
                                fullWidth
                                sx={{ mb: 2 }}
                                value={formData.Estado_Emocional}
                                onChange={handleChange}
                            />
                            <TextField
                                id="Notas"
                                label="Notas"
                                multiline
                                rows={4}
                                variant="outlined"
                                fullWidth
                                sx={{ mb: 2 }}
                                value={formData.Notas}
                                onChange={handleChange}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                            >
                                Actualizar
                            </Button>
                        </form>
                    )}
                </CardContent>
            </Card>
        </Container>
    );
}