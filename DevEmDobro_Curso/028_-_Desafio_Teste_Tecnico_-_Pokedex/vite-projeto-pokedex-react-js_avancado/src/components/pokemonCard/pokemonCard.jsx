import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import axios from "axios";

export default function PokemonCard({ name, image, types, moves, abilities }) {
    const [abilityDetails, setAbilityDetails] = React.useState([]);

    React.useEffect(() => {
        const fetchAbilityDetails = async () => {
            if (!abilities || abilities.length === 0) {
                console.log("No abilities found for this Pokémon.");
                return;
            }

            console.log("Abilities received:", abilities);

            const abilityPromises = abilities.map((ability) =>
                axios.get(ability.ability.url).then((res) => ({
                    name: ability.ability.name,
                    description:
                        res.data.effect_entries.find(
                            (entry) => entry.language.name === "en"
                        )?.effect || "No description available",
                }))
            );

            try {
                const resolvedAbilities = await Promise.all(abilityPromises);
                console.log("Resolved abilities:", resolvedAbilities);
                setAbilityDetails(resolvedAbilities);
            } catch (error) {
                console.error("Error fetching ability details:", error);
            }
        };

        fetchAbilityDetails();
    }, [abilities]);

    const typeHandler = (types) => {
        if (types && types[1]) {
            return types[0].type.name + " | " + types[1].type.name;
        }
        return types && types[0] ? types[0].type.name : "Unknown";
    };

    const moveHandler = (moves) => {
        if (!moves || moves.length === 0) {
            return "No moves available";
        }
        return moves
            .slice(0, 5)
            .map((move) => move.move.name)
            .join(", ");
    };

    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%", // Garante que o cartão ocupe toda a altura disponível
            }}
        >
            <CardMedia
                sx={{ height: 200, objectFit: "contain", width: "100%" }}
                image={image}
                title={name}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="caption" component="div">
                        {typeHandler(types)}
                    </Typography>
                </Box>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                >
                    <strong>Moves:</strong> {moveHandler(moves)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Abilities:</strong>
                </Typography>
                {abilityDetails.length > 0 ? (
                    abilityDetails.map((ability, index) => (
                        <Typography
                            key={index}
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 1 }}
                        >
                            <strong>{ability.name}:</strong>{" "}
                            {ability.description}
                        </Typography>
                    ))
                ) : (
                    <Typography variant="body2" color="text.secondary">
                        No abilities available.
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
}
