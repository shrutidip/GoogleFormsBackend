import express, { Request, Response } from 'express';
import fs from 'fs';

const app = express();
const PORT = 3000;
const dbPath = './db.json';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint to ping the server
app.get('/ping', (req: Request, res: Response) => {
  res.json({ success: true });
});

// Endpoint to submit new form data
app.post('/submit', (req: Request, res: Response) => {
  const { name, email, phone, github_link, stopwatch_time } = req.body;
  const newSubmission = { name, email, phone, github_link, stopwatch_time };
  
  try {
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    db.submissions.push(newSubmission);
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
    
    res.json({ success: true });
  } catch (error) {
    console.error('Error saving submission:', error);
    res.status(500).json({ error: 'Failed to save submission' });
  }
});

// Endpoint to read a submission by index
app.get('/read', (req: Request, res: Response) => {
  const index = Number(req.query.index);
  
  try {
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    const submission = db.submissions[index];
    
    if (submission) {
      res.json(submission);
    } else {
      res.status(404).json({ error: 'Submission not found' });
    }
  } catch (error) {
    console.error('Error reading submission:', error);
    res.status(500).json({ error: 'Failed to read submission' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
