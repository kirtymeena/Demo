import React from "react";
import {
    Box,
    Card,
    CardContent,
    Typography,
    Button,
    TextField,
    IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
import "./dashboard.scss";

export default function Dashboard() {
    const sites = ["Building", "HQ", "Office", "Outpost", "Restaurant"];

    return (
        <Box className="dashboard">
            {/* 🔹 Top Section */}
            <Box className="top-section">
                <Card className="map-card">
                    <CardContent>
                        <Typography variant="h6">Site Locations (Map)</Typography>
                    </CardContent>
                </Card>

                <Box className="right-panels">
                    <Card className="info-card">
                        <CardContent>
                            <Typography variant="h6">Totals</Typography>
                            <Typography>Power Generation, Storage, Consumption</Typography>
                        </CardContent>
                    </Card>
                    <Card className="info-card">
                        <CardContent>
                            <Typography variant="h6">Cost of Energy</Typography>
                            <Typography>CO₂ Data & Charts</Typography>
                        </CardContent>
                    </Card>
                    <Card className="info-card">
                        <CardContent>
                            <Typography variant="h6">Cost of Energy</Typography>
                            <Typography>CO₂ Data & Charts</Typography>
                        </CardContent>
                    </Card>
                    <Card className="info-card">
                        <CardContent>
                            <Typography variant="h6">Cost of Energy</Typography>
                            <Typography>CO₂ Data & Charts</Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Box>

            {/* 🔹 Filter Bar */}
            <Box className="filter-bar">
                <TextField placeholder="Search Sites..." size="small" />
                <Button variant="outlined">Filter</Button>
                <Box className="filter-actions">
                    <IconButton>
                        <ViewModuleIcon />
                    </IconButton>
                    <IconButton>
                        <ViewListIcon />
                    </IconButton>
                    <Button variant="contained" startIcon={<AddIcon />}>
                        Add Site
                    </Button>
                </Box>
            </Box>

            {/* 🔹 Sites Section */}
            <Box className="sites-grid">
                {sites.map((site) => (
                    <Card key={site} className="site-card">
                        <CardContent>
                            <Typography variant="h6">{site}</Typography>
                            <Typography>Power Generation, Storage, Consumption</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}