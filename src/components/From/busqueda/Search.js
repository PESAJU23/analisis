import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Card, CardContent, Typography } from "@mui/material";
import axios from 'axios';

export default function SearchComponent() {
    // Estado para almacenar el término de búsqueda y los resultados
    const [searchTerm, setSearchTerm] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    let isMounted = true;

    useEffect(() => {
        return () => {
            isMounted = false;
        };
    }, []);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = async () => {
        try {
            setError(null);
            const response = await axios.get(`http://localhost:5000/api/data/subject/${searchTerm}`);
            if (isMounted) {
                setResult(response.data);
            }
        } catch (err) {
            if (isMounted) {
                setError("No se encontró el sujeto o ocurrió un error.");
            }
        }
    };

    const handleDelete = async () => {
        if (!searchTerm) {
            alert("Por favor, ingresa un número de sujeto para eliminar.");
            return;
        }
        const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este sujeto?");
        if (!confirmDelete) return;
        try {
            await axios.delete(`http://localhost:5000/api/data/subject/${searchTerm}`);
            alert("Sujeto eliminado correctamente");
            setResult(null);
            setSearchTerm('');
            setError(null);
        } catch (err) {
            alert("No se pudo eliminar el sujeto. Verifica si existe.");
        }
    };

    return (
        <React.Fragment>
            <Container maxWidth="md" sx={{ marginTop: '20px' }}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h4" align="center" fontWeight="bold">
                            Comportamiento Humano
                        </Typography>
                        <Typography variant="h6" align="center" color="text.secondary" mb={2}>
                            Buscar Sujeto
                        </Typography>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <TextField
                                id="numero_del_sujeto"
                                label="Número de Sujeto"
                                variant="outlined"
                                fullWidth
                                value={searchTerm}
                                onChange={handleChange}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleSearch}
                            >
                                Buscar
                            </Button>
                        </div>
                        {error && (
                            <Typography color="error" sx={{ mt: 3 }}>
                                {error}
                            </Typography>
                        )}
                        {result && (
                            <Card sx={{ borderRadius: 2, mt: 3, p: 2 }}>
                                <Typography variant="h6" sx={{ mb: 1 }}>Resultados:</Typography>
                                <Typography>ID: {result.ID}</Typography>
                                <Typography>Número de Sujeto: {result.numero_del_sujeto}</Typography>
                                <Typography>Fecha: {result.Fecha}</Typography>
                                <Typography>Hora: {result.Hora}</Typography>
                                <Typography>Ubicación: {result.Ubicación}</Typography>
                                <Typography>Acción Final: {result.Accion_Final}</Typography>
                                <Typography>Comportamientos Previos: {result.Comportamientos_Previos}</Typography>
                                <Typography>Duración: {result.Duracion}</Typography>
                                <Typography>Frecuencia: {result.Frecuencia}</Typography>
                                <Typography>Estado Emocional: {result.Estado_Emocional}</Typography>
                                <Typography>Notas: {result.Notas}</Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{ mt: 2 }}
                                    onClick={handleDelete}
                                >
                                    Eliminar
                                </Button>
                            </Card>
                        )}
                    </CardContent>
                </Card>
            </Container>
        </React.Fragment>
    );
}
