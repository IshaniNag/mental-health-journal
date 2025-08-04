// App.js

import React from "react";
import { Container, Typography, TextField, Button, Paper } from "@mui/material";
import { motion } from "framer-motion";

function App() {
  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Paper elevation={6} sx={{ p: 4, borderRadius: 4 }}>
          <Typography variant="h4" gutterBottom>
            🧠 Mental Health Journal
          </Typography>
          <TextField
            label="Write your thoughts..."
            multiline
            rows={6}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button variant="contained" fullWidth>
            Analyze Entry
          </Button>
        </Paper>
      </motion.div>
    </Container>
  );
}

export default App;
