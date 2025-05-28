import React, { useState } from 'react';
import { Container, TextField, Button, Card, CardContent, Typography, Grid } from "@mui/material";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FormComponent() {
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

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const handleSave = async (e) => {
        e.preventDefault();
        if (!formData.numero_del_sujeto || isNaN(formData.numero_del_sujeto)) {
            alert('El número del sujeto es obligatorio y debe ser un número válido');
            return;
        }
        if (!formData.Duracion || isNaN(formData.Duracion)) {
            alert('La duración es obligatoria y debe ser un número válido');
            return;
        }
        if (!formData.Frecuencia || isNaN(formData.Frecuencia)) {
            alert('La frecuencia es obligatoria y debe ser un número válido');
            return;
        }

        try {
            await axios.post('http://localhost:5000/api/data', formData);
            toast.success('Dato agregado correctamente');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                toast.error(error.response.data);
            } else {
                toast.error("Ocurrió un error al guardar los datos");
            }
        }
    };

    return (
        <React.Fragment>
            <ToastContainer />
            <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
                <Card
                    variant="outlined"
                    sx={{
                        borderRadius: 4,
                        boxShadow: 3,
                        bgcolor: 'background.paper',
                        color: 'text.primary',
                        p: { xs: 1, sm: 2, md: 3 }
                    }}
                >
                    <CardContent sx={{ p: { xs: 1, sm: 2, md: 3 } }}>
                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                            Formulario de Comportamiento Humano
                        </Typography>
                        <form noValidate autoComplete="off" onSubmit={handleSave}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="numero_del_sujeto"
                                        label="Número de Sujeto"
                                        value={formData.numero_del_sujeto}
                                        onChange={handleChange}
                                        margin="normal"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="Fecha"
                                        label="Fecha"
                                        type="date"
                                        InputLabelProps={{ shrink: true }}
                                        value={formData.Fecha}
                                        onChange={handleChange}
                                        margin="normal"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="Hora"
                                        label="Hora"
                                        type="time"
                                        InputLabelProps={{ shrink: true }}
                                        value={formData.Hora}
                                        onChange={handleChange}
                                        margin="normal"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="Ubicación"
                                        label="Ubicación"
                                        value={formData.Ubicación}
                                        onChange={handleChange}
                                        margin="normal"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="Duracion"
                                        label="Duración"
                                        value={formData.Duracion}
                                        onChange={handleChange}
                                        margin="normal"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="Frecuencia"
                                        label="Frecuencia"
                                        value={formData.Frecuencia}
                                        onChange={handleChange}
                                        margin="normal"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="Estado_Emocional"
                                        label="Estado Emocional"
                                        value={formData.Estado_Emocional}
                                        onChange={handleChange}
                                        margin="normal"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="Accion_Final"
                                        label="Acción Final"
                                        value={formData.Accion_Final}
                                        onChange={handleChange}
                                        margin="normal"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="Comportamientos_Previos"
                                        label="Comportamientos Previos"
                                        value={formData.Comportamientos_Previos}
                                        onChange={handleChange}
                                        margin="normal"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="Notas"
                                        label="Notas"
                                        multiline
                                        rows={4}
                                        value={formData.Notas}
                                        onChange={handleChange}
                                        margin="normal"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{
                                            mt: 2,
                                            width: '100%',
                                            fontWeight: 'bold'
                                        }}
                                        type="submit"
                                    >
                                        Guardar
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Container>
        </React.Fragment>
    );
}
