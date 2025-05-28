import * as React from 'react';
import {
    AppBar, Toolbar as MuiToolbar, Drawer, List, ListItem, ListItemButton,
    ListItemIcon, ListItemText, Typography, CssBaseline, Box, IconButton,
    Avatar, Divider, Paper, Button
} from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InfoIcon from '@mui/icons-material/Info';
import TableChartIcon from '@mui/icons-material/TableChart';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import FeedbackIcon from '@mui/icons-material/Feedback';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Toolbar from '@mui/material/Toolbar';
import logo from '../assets/logo.png';
import user from '../assets/user.png';
import CalculadoraLed from './Caluladora/CalculadoraLed.js';
import Formulario from './From/fomularios/FormComponent.js';
import Informacion from './From/fomularios/formulariodos.js';
import Tabla from './From/Tablas/Table.js';
import Buscar from './From/busqueda/Search.js';
import { useTheme } from '@mui/material/styles';

const drawerWidth = 260;

const mainOptions = [
    { label: 'Calculadora Led', icon: <LightbulbIcon /> },
    { label: 'Formulario', icon: <AssignmentIcon /> },
    { label: 'Informacion', icon: <InfoIcon /> },
    { label: 'Tabla de datos', icon: <TableChartIcon /> },
    { label: 'Buscar', icon: <SearchIcon /> }
];

const secondaryOptions = [
    { label: 'Settings', icon: <SettingsIcon /> },
    { label: 'About', icon: <InfoOutlinedIcon /> },
    { label: 'Feedback', icon: <FeedbackIcon /> }
];

// Opciones para el dropdown principal (solo las que pides)
const dropdownOptions = [
    {
        key: 'Calculadora Led',
        icon: <LightbulbIcon sx={{ color: 'text.secondary' }} />,
        primary: 'Calculadora',
        secondary: 'LED para muebles'
    },
    {
        key: 'Formulario',
        icon: <AssignmentIcon sx={{ color: 'text.secondary' }} />,
        primary: 'Formulario',
        secondary: 'Registro de datos'
    },
    {
        key: 'Informacion',
        icon: <InfoIcon sx={{ color: 'text.secondary' }} />,
        primary: 'Información',
        secondary: 'Detalles y ayuda'
    },
    {
        key: 'Tabla de datos',
        icon: <TableChartIcon sx={{ color: 'text.secondary' }} />,
        primary: 'Tabla',
        secondary: 'Visualización de datos'
    },
    {
        key: 'Buscar',
        icon: <SearchIcon sx={{ color: 'text.secondary' }} />,
        primary: 'Búsqueda',
        secondary: 'Buscar registros'
    }
];

export default function PermanentDrawerLeft(props) {
    const theme = useTheme(); // <--- Agrega esto

    const [seleccion, setSeleccion] = React.useState("inicio");
    const [openDropdown, setOpenDropdown] = React.useState(false);

    // Encuentra la opción seleccionada
    const selectedDropdown = dropdownOptions.find(opt => opt.key === seleccion) || dropdownOptions[0];

    function renderContenido() {
        switch (seleccion) {
            case 'Calculadora Led':
                return <CalculadoraLed />;
            case 'Formulario':
                return <Formulario />;
            case 'Informacion':
                return <Informacion />;
            case 'Tabla de datos':
                return <Tabla />;
            case 'Buscar':
                return <Buscar />;
            case 'inicio':
            default:
                return (
                    <Box
                        sx={{
                            borderRadius: 3,
                            p: 4,
                            bgcolor: 'background.paper',
                            color: 'text.primary',
                            boxShadow: 3,
                            maxWidth: 600,
                            mx: 'auto',
                            mt: 8,
                            textAlign: 'center'
                        }}
                    >
                        <Typography variant="h3" fontWeight="bold" gutterBottom>
                            ¡Bienvenido a Analicis de Comportamiento!
                        </Typography>
                        <Typography variant="h6" color="text.secondary" gutterBottom>
                            Esta aplicación te permite registrar, buscar y analizar datos de comportamiento humano de manera sencilla y eficiente.
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            <ul style={{ textAlign: 'left', display: 'inline-block', margin: 0, padding: 0 }}>
                                <li>✔️ Calcula y gestiona datos de tiras LED para muebles.</li>
                                <li>✔️ Registra y actualiza información de sujetos y sus comportamientos.</li>
                                <li>✔️ Busca y visualiza registros fácilmente.</li>
                                <li>✔️ Analiza tablas de datos y obtén reportes rápidos.</li>
                            </ul>
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
                            Selecciona una opción del menú lateral para comenzar.
                        </Typography>
                    </Box>
                );
        }
    }

    return (


        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            {/* TopBar */}
            <AppBar
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    backgroundColor: theme.palette.background.paper, // Usa el fondo del tema
                    color: theme.palette.text.primary, // Usa el color de texto principal del tema
                }}
            >
                <MuiToolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ width: 40, height: 40, cursor: 'pointer' }}
                            onClick={() => setSeleccion("inicio")}
                        />
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{
                                ml: 2,
                                color: theme.palette.text.primary, // <--- Color dinámico
                                fontWeight: 'bold'
                            }}
                        >
                            Analisis de Comportamiento
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                borderRadius: 1,
                                px: 2,
                                py: 0.5,
                                width: '180px',
                                border: 1,
                                borderColor: 'divider'
                            }}
                        >
                            <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />
                            <input
                                placeholder="Buscar..."
                                style={{
                                    border: 'none',
                                    outline: 'none',
                                    width: '100%',
                                    background: 'transparent',
                                    color: 'inherit',
                                    fontSize: 16,
                                }}
                            />
                        </Box>
                        <IconButton
                            onClick={props.toggleTheme}
                            sx={{
                                color: theme.palette.mode === 'dark'
                                    ? theme.palette.text.primary
                                    : theme.palette.primary.main // Verde en claro, blanco en oscuro
                            }}
                        >
                            {props.modoOscuro ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                        <IconButton sx={{ color: theme.palette.text.primary }}>
                            <MoreVertRoundedIcon />
                        </IconButton>
                        <Avatar alt="User" src={user} />
                    </Box>
                </MuiToolbar>
            </AppBar>

            {/* Drawer */}
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        p: 2,
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Box >
                    {/* Custom dropdown selector */}

                    <Box sx={{ mb: 1, mt: -36, position: 'relative' }}>
                        <Button
                            variant="outlined"
                            sx={{
                                width: '100%',
                                justifyContent: 'flex-start',
                                fontWeight: 'bold',
                                fontSize: 16,
                                px: 2,
                                py: 1.5,
                            }}
                            endIcon={
                                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
                                    <span style={{ fontSize: 10, color: '#b0b0b0', lineHeight: 0.7 }}>▲</span>
                                    <span style={{ fontSize: 10, color: '#b0b0b0', lineHeight: 0.7 }}>▼</span>
                                </Box>
                            }
                            onClick={() => setOpenDropdown((open) => !open)}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Box
                                    sx={{
                                        width: 32,
                                        height: 32,
                                        borderRadius: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: 1,
                                        borderColor: 'divider',
                                        mr: 1
                                    }}
                                >
                                    {selectedDropdown.icon}
                                </Box>
                                <Box>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: 16, lineHeight: 1 }}>
                                        {selectedDropdown.primary}
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary', fontSize: 13, lineHeight: 1 }}>
                                        {selectedDropdown.secondary}
                                    </Typography>
                                </Box>
                            </Box>
                        </Button>
                        {/* Dropdown menu */}
                        {openDropdown && (
                            <Paper
                                elevation={4}
                                sx={{
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    mt: 1,
                                    zIndex: 10,
                                    border: 1,
                                    borderColor: 'divider',
                                    borderRadius: 2,
                                    p: 0,
                                }}
                            >
                                <List>
                                    {dropdownOptions.map(opt => (
                                        <ListItem disablePadding key={opt.key}>
                                            <ListItemButton
                                                selected={seleccion === opt.key}
                                                sx={{ borderRadius: 2 }}
                                                onClick={() => {
                                                    setSeleccion(opt.key);
                                                    setOpenDropdown(false);
                                                }}
                                            >
                                                <ListItemIcon sx={{ minWidth: 36 }}>
                                                    {opt.icon}
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={opt.primary}
                                                    secondary={opt.secondary}
                                                    primaryTypographyProps={{ sx: { fontWeight: 'bold', fontSize: 16 } }}
                                                    secondaryTypographyProps={{ sx: { color: 'text.secondary', fontSize: 13 } }}
                                                />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Paper>
                        )}
                    </Box>

                    <Divider sx={{ my: -2, mx: -2, mt: 1.5, mb: 2 }} />
                    {/* Main options */}
                    {mainOptions.map((option) => (
                        <ListItem key={option.label} disablePadding>
                            <ListItemButton
                                selected={seleccion === option.label}
                                onClick={() => setSeleccion(option.label)}
                                sx={{ borderRadius: 2}}
                            >
                                <ListItemIcon sx={{ minWidth: 36 }}>
                                    {option.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={option.label}
                                    primaryTypographyProps={{ sx: { fontWeight: 'bold', fontSize: 13 } }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}

                </Box>
                {/* User block */}
                <Box>
                    {/* Promo block */}
                    <Paper elevation={0} sx={{ border: 1, borderColor: 'divider', borderRadius: 2, p: 2, mt: 2 }}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: 15 }}>Plan about to expire</Typography>
                        <Typography color="text.secondary" sx={{ fontSize: 13, mb: 1 }}>
                            Enjoy 10% off when renewing your plan today.
                        </Typography>
                        <Button
                            variant="contained"
                            fullWidth
                        >
                            Get the discount
                        </Button>
                    </Paper>
                    <Divider sx={{ my: -2, mx: -2, mb: 2, mt: 2 }} />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1 }}>
                        <Avatar alt="User" src={user} />
                        <Box>
                            <Typography sx={{ fontWeight: 'bold', fontSize: 15 }}>Pedro juan</Typography>
                            <Typography color="text.secondary" sx={{ fontSize: 13 }}>pesa@gmail.com</Typography>
                        </Box>
                        <IconButton sx={{ ml: 'auto' }}>
                            <MoreVertRoundedIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Drawer>
            {/* Contenido principal */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    minHeight: '100vh'
                }}
            >
                <MuiToolbar />
                {renderContenido()}
            </Box>
        </Box>
    );
}
