import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

function App() {
  const [journalEntry, setJournalEntry] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleSubmit = () => {
    // This is where backend call will go
    console.log("Submitted:", journalEntry);
    setAnalysisResult("This is where the analysis result will show.");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Mental Health Journal Analyzer
      </Typography>

      <TextField
        label="Write your journal entry"
        multiline
        rows={6}
        fullWidth
        value={journalEntry}
        onChange={(e) => setJournalEntry(e.target.value)}
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <Button variant="contained" onClick={handleSubmit}>
        Analyze Entry
      </Button>

      {analysisResult && (
        <Box mt={4}>
          <Typography variant="h6">Analysis Result:</Typography>
          <Typography>{analysisResult}</Typography>
        </Box>
      )}
    </Container>
  );
}

export default App;
