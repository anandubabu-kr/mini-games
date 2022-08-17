import "./App.css";
import React, { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";
import { Container, MainContainer } from "./design/main";
import { Home } from "./pages/Home";
import { MemoryGame } from "./components/MemoryGame/MemoryGame";
import { TicTacToe } from "./components/TicTacToeGame/TicTacToe";
import { RockPaperScissors } from "./components/RockPaperScissors/RockPaperScissors";
import { Footer } from "./pages/Footer";
import { NavBar } from "./pages/NavBar";
import HitTheMole from "./components/HitTheMole/HitTheMole";

import { useDispatch } from "react-redux";
import { setUserName } from "./services/redux/slices/userSlice";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./services/firebase/config";
import { LoadingFanFullScreen } from "./pages/LoadingScreen";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const userCollectionRef = collection(db, "userprofile");

    const getUserInfo = async () => {
      const data = await getDocs(userCollectionRef);
      const res = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      // console.log(" App : --- data ---", res);
      dispatch(setUserName(res[0].name));
      setLoading(false);
    };
    getUserInfo();
  }, [dispatch]);

  return (
    <MainContainer>
      {loading ? (
        <LoadingFanFullScreen />
      ) : (
        <>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="memory-game" exact element={<MemoryGame />} />
            <Route path="tic-tac-toe" element={<TicTacToe />} />
            <Route
              path="rock-paper-scissores"
              element={<RockPaperScissors />}
            />
            <Route path="hit-a-mole" element={<HitTheMole />} />
            <Route path="*" element={<ErrorPage />} />
            {/* <Route path='' element={}/> */}
          </Routes>
          <Footer />
        </>
      )}
    </MainContainer>
  );
}

export const ErrorPage = () => {
  return <Container>Sorry This game is not available</Container>;
};

export default App;
