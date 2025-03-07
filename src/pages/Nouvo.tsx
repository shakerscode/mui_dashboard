import React, { useState } from "react";
import {
  Container,
  Box,
  Paper,
  Typography,
  Button, 
  Select,
  MenuItem,
  FormControl, 
  List,
  ListItem,
  IconButton, 
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import DeleteIcon from "@mui/icons-material/Delete";

const Nuovo = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [contractType, setContractType] = useState("");
 

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files
      ? Array.from(event.target.files)
      : [];
    setFiles([...files, ...selectedFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 4 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h5" fontWeight="bold">
            Invia Nuovo Contratto
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1" fontWeight="medium">
              Upload file
            </Typography>
            <Button
              variant="contained"
              component="label"
              startIcon={<UploadFileIcon />}
              sx={{ mt: 2 }}
            >
              Upload
              <input
                type="file"
                hidden
                multiple
                accept=".pdf,.jpg,.png"
                onChange={handleFileChange}
              />
            </Button>
            <List>
              {files.map((file, index) => (
                <ListItem
                  key={index}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => removeFile(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                  sx={{
                    mt:2
                  }}
                >
                  {file.name}
                </ListItem>
              ))}
            </List>
          </Box>
          <p>Tipo contratto</p>
          <FormControl fullWidth  >
            <Select
              value={contractType}
              onChange={(e) => setContractType(e.target.value)}
              displayEmpty
              sx={{ backgroundColor: "white", borderRadius: 1 }}
            >
              <MenuItem value="">Seleziona tipo contratto</MenuItem>
              <MenuItem value="Energia elettrica : richiesta preventivo">
                Energia elettrica : richiesta preventivo
              </MenuItem>
              <MenuItem value="Energia elettrica : attivazione">
                Energia elettrica : attivazione
              </MenuItem>
              <MenuItem value="Energia elettrica : voltura cliente in fornitura">
                Energia elettrica : voltura cliente in fornitura
              </MenuItem>
              <MenuItem value="Energia elettrica : disattivazione">
                Energia elettrica : disattivazione
              </MenuItem>
              <MenuItem value="Energia elettrica : Switch con voltura">
                Energia elettrica : Switch con voltura
              </MenuItem>
              <MenuItem value="Energia elettrica : Modifica condizioni tecniche">
                Energia elettrica : Modifica condizioni tecniche
              </MenuItem>
              <MenuItem value="Gas : richiesta preventivo">
                Gas : richiesta preventivo
              </MenuItem>
              <MenuItem value="Gas : attivazione">Gas : attivazione</MenuItem>
              <MenuItem value="Gas : voltura cliente in fornitura">
                Gas : voltura cliente in fornitura
              </MenuItem>
              <MenuItem value="Gas : disattivazione">
                Gas : disattivazione
              </MenuItem>
              <MenuItem value="Gas : Switch con voltura">
                Gas : Switch con voltura
              </MenuItem>
              <MenuItem value="Gas : Modifica condizioni tecniche">
                Gas : Modifica condizioni tecniche
              </MenuItem>
            </Select>
          </FormControl>
          <div>
            <p>Note</p>
            <textarea
              name=""
              id=""
              style={{
                height: "100px",
                border: "1px solid gray",
                width: "100%",
                borderRadius: "12px",
                padding: "10px",
              }}
              placeholder="Note..."
            ></textarea>
          </div>
        </Paper>
        <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
          <Typography variant="h6">Invia Dati Pratica</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Inviando i dati si accetta il contratto di riservatezza e di
            privacy.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Invia
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default Nuovo;
