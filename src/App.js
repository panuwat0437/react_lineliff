
import React, { useEffect,useState} from 'react'; //จัดการ state
const liff = window.liff;

function App() {
  // const [name, setName] = useState("");
  // const [userLineID, setUserLineID] = useState("");
  // const [pictureUrl, setPictureUrl] = useState("");

  const logout = () => {
    liff.logout();
    window.location.reload();
  }

  async function fetchLiff() {
    await liff.init({ liffId: `1655557814-mPVknAg8` }).catch(err=>{throw err});
      if (liff.isLoggedIn()) {
        let getProfile =  await liff.getProfile();
        // setName(getProfile.displayName);
        // setUserLineID(getProfile.userId);
        // setPictureUrl(getProfile.pictureUrl);
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdH7uwMINodj3dJSPpss-_DnJIiQ4t_U0TnJ__rZDamfbDUdA/viewform?usp=pp_url&entry.862938837="+
        getProfile.userId+"&entry.428673667="+getProfile.displayName+"&entry.845592098="+getProfile.pictureUrl;
      }else{
        
        liff.login();
      }
  }

  useEffect(() => {
    fetchLiff();
  }, [])


  return (
    <div className="App">
     <h1>Lineliff</h1>
     {/* <p>ชื่อ {name}</p>
     <p>UserID {userLineID}</p>
     <img alt='img' src={pictureUrl} width="300px"  /><br></br> */}
     <button onClick={() => logout()} className="mt-2" style={{ width: "20%", height: 30 }}>Logout</button>
    </div>
  );
}

export default App;
