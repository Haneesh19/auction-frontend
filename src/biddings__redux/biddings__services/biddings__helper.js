// export const BIDDING__MAIN__BACKENDURL="http://localhost:5000/api"
// export const BIDDING__MAIN__BACKENDURL= process.env.REACT_APP_API_PROXY




    export const BIDDING__MAIN__BACKENDURl =
  import.meta.env.VITE_LOCAL_URL === "production"
    ? "https://auction-backend-bchd.onrender.com/"
    : `http://localhost:4000`;
