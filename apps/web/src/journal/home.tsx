import { Form } from 'react-final-form';
import { TextField } from 'mui-rff';
import { Button, Card, Typography, Stack } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useState } from 'react';

export function Home() {
  return <MyForm />;
}

function MyForm() {
  type ListJournal = {
    title: string;
    content: string;
    id: number;
    created_at: string;
  };

  const [receivedData, setReceivedData] = useState<ListJournal[]>([]);
  const URL = 'http://localhost:3000/api/journal';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ListJournal[] = await response.json();
        setReceivedData(data);
        console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  async function onSubmit(values: FormData) {
    const URL = 'http://localhost:3000/api/journal';
    console.log(values);
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <>
      <Card
        sx={{
          display: 'flex',
          paddingTop: 3,
          paddingBottom: 3,
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <CardContent>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, values }) => (
              <form
                style={{
                  backgroundColor: '#fafafa',
                  borderStyle: 'solid',
                  borderColor: '#eeeeee',
                  borderRadius: 5,
                  width: 500,
                  padding: 50,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 30,
                  justifyContent: 'space-between',
                }}
                onSubmit={handleSubmit}
              >
                <TextField label="Title" name="title" required={true} />
                <TextField
                  id="outlined-multiline-static"
                  label="Content"
                  multiline
                  rows={4}
                  name="content"
                  required={true}
                />
                <Button
                  sx={{
                    marginTop: 2,
                    height: 70,
                  }}
                  type="submit"
                  fullWidth
                  variant="contained"
                  endIcon={<SendIcon />}
                >
                  Send
                </Button>
              </form>
            )}
          />
        </CardContent>

        <Stack
          sx={{
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            gap: 1,
          }}
        >
          {receivedData.map((e) => (
            <CardContent
              key={e.id}
              sx={{
                width: 700,
                backgroundColor: '#fafafa',
                borderStyle: 'solid',
                borderColor: '#eeeeee',
                borderRadius: 2,
                padding: 5,
              }}
            >
              <Typography
                variant="caption"
                gutterBottom
                sx={{ display: 'flex', justifyContent: 'end' }}
              >
                Created at:{' '}
                {new Date(e.created_at).toLocaleString(undefined, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                })}
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {e.title}
              </Typography>
              <Typography
                variant="overline"
                gutterBottom
                sx={{
                  display: 'block',
                  whiteSpace: 'normal',
                  wordBreak: 'break-word',
                }}
                dangerouslySetInnerHTML={{ __html: e.content }}
              />

              <Typography
                variant="caption"
                gutterBottom
                sx={{
                  display: 'flex',
                  justifyContent: 'end',
                  color: 'gray',
                }}
              >
                Georgie_69
              </Typography>
            </CardContent>
          ))}
        </Stack>
      </Card>
    </>
  );
}
