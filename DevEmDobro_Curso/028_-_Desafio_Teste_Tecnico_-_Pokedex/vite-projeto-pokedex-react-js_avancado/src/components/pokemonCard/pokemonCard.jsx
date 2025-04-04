import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function PokemonCard({ name, image, types }) {

    const typeHandler = (types) => {
        if(types[1]){
            return types[0].type.name + " | " + types[1].type.name;
        }
        return types[0].type.name;
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 200, objectFit: "contain", witdh: "100%" }}
                image={image} // Atualize para usar a imagem dinâmica
                title={name}
            />
            <CardContent>
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="caption" component="div">
                        {typeHandler(types)}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}