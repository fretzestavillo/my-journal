import { title } from 'process';

export function Home() {
  type dataArea = {
    title: string;
    content: string;
  };

  function submitMe(dataReceived: dataArea) {
    const URL = 'http://localhost:3000/api/journal';
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
    </>
  );
}
