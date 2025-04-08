import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function PokemonCard({ name, image, types, moves }) {
    const typeHandler = (types) => {
        if (types && types[1]) {
            return types[0].type.name + " | " + types[1].type.name;
        }
        return types && types[0] ? types[0].type.name : "Unknown";
    };

    const moveHandler = (moves) => {
        // Verifica se moves está definido e exibe os primeiros 5 movimentos
        if (!moves || moves.length === 0) {
            return "No moves available";
        }
        return moves.slice(0, 5).map((move) => move.move.name).join(", ");
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 200, objectFit: "contain", width: "100%" }}
                image={image} // Atualize para usar a imagem dinâmica
                title={name}
            />
            <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="caption" component="div">
                        {typeHandler(types)}
                    </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                    <strong>Moves:</strong> {moveHandler(moves)}
                </Typography>
            </CardContent>
        </Card>
    );
}