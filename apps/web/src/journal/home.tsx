import { useEffect, useState } from 'react';

export function Home() {
  type dataArea = {
    title: string;
    content: string;
  };

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

  async function submitMe(dataReceived: dataArea) {
    const URL = 'http://localhost:3000/api/journal';

    const finalData: dataArea = {
      title: dataReceived.title,
      content: dataReceived.content,
    };

    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData),
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const title = String(formData.get('title'));
          const content = String(formData.get('content'));

          const dataReceived = {
            title,
            content,
          };

          submitMe(dataReceived);
        }}
      >
        <div className="input-field col s6">
          <input type="text" name="title" className="validate" />
          <label>Title</label>
        </div>

        <div className="input-field col s12">
          <textarea name="content" className="materialize-textarea"></textarea>
        </div>

        <button className="waves-effect waves-light btn green">Fck you</button>
      </form>
      <ol>
        {receivedData.map((e) => (
          <li key={e.id}>
            <p>{e.title}</p>
            <p>{e.content}</p>
            <small>Created at: {new Date(e.created_at).toLocaleString()}</small>
          </li>
        ))}
      </ol>
    </>
  );
}
