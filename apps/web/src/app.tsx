// eslint-disable-next-line @typescript-eslint/no-unused-vars

export function App() {
  return (
    <>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder="Placeholder"
                id="first_name"
                type="text"
                className="validate"
              />
              <label>First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" />
              <label>Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                disabled
                value="I am not editable"
                id="disabled"
                type="text"
                className="validate"
              />
              <label>Disabled</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label>Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label>Email</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              This is an inline input field:
              <div className="input-field inline">
                <input id="email_inline" type="email" className="validate" />
                <label>Email</label>
                <span
                  className="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  Helper text
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
