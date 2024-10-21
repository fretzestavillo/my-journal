export function Home() {
  type dataArea = {
    title: string;
    textArea: string;
  };

  function submitMe(dataReceived: dataArea) {
    console.log(dataReceived.title, dataReceived.textArea);

    if (!dataReceived.title || !dataReceived.textArea) {
      console.log('cannot proceed');
    } else {
      console.log('post data');
    }
  }
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const title = String(formData.get('title'));
          const textArea = String(formData.get('textarea1'));

          const dataReceived = {
            title,
            textArea,
          };

          submitMe(dataReceived);
        }}
      >
        <div className="input-field col s6">
          <input type="text" name="title" className="validate" />
          <label>Title</label>
        </div>

        <div className="input-field col s12">
          <textarea
            name="textarea1"
            className="materialize-textarea"
          ></textarea>
        </div>

        <button className="waves-effect waves-light btn green">Fck you</button>
      </form>
    </>
  );
}
