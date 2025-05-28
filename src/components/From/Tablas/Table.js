import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function TableComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/data')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });
    }, []);

    return (
        <React.Fragment>
            <Container maxWidth="xl" sx={{ marginTop: '50px' }}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h4" align="center" fontWeight="bold">
                            Comportamiento Humano
                        </Typography>
                        <Typography variant="h6" align="center" color="text.secondary" mb={2}>
                            Tabla de Datos
                        </Typography>
                        <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
                            <Table sx={{ minWidth: 650 }} aria-label="tabla de comportamiento humano">
                                <TableHead>
                                    <TableRow>
                                        <TableCell fontWeight="bold">ID</TableCell>
                                        <TableCell fontWeight="bold">Número de Sujeto</TableCell>
                                        <TableCell fontWeight="bold">Fecha</TableCell>
                                        <TableCell fontWeight="bold">Hora</TableCell>
                                        <TableCell fontWeight="bold">Ubicación</TableCell>
                                        <TableCell fontWeight="bold">Acción Final</TableCell>
                                        <TableCell fontWeight="bold">Comportamientos Previos</TableCell>
                                        <TableCell fontWeight="bold">Duración</TableCell>
                                        <TableCell fontWeight="bold">Frecuencia</TableCell>
                                        <TableCell fontWeight="bold">Estado Emocional</TableCell>
                                        <TableCell fontWeight="bold">Notas</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map((row) => (
                                        <TableRow key={row.ID}>
                                            <TableCell>{row.ID}</TableCell>
                                            <TableCell>{row.numero_del_sujeto}</TableCell>
                                            <TableCell>{row.Fecha}</TableCell>
                                            <TableCell>{row.Hora}</TableCell>
                                            <TableCell>{row.Ubicación}</TableCell>
                                            <TableCell>{row.Accion_Final}</TableCell>
                                            <TableCell>{row.Comportamientos_Previos}</TableCell>
                                            <TableCell>{row.Duracion}</TableCell>
                                            <TableCell>{row.Frecuencia}</TableCell>
                                            <TableCell>{row.Estado_Emocional}</TableCell>
                                            <TableCell>{row.Notas}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>
            </Container>
        </React.Fragment>
    );
}