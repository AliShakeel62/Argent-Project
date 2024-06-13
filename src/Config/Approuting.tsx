import { BrowserRouter,Route,Routes } from "react-router-dom"
import Homepage from "../Pages/Home"
import Questionspage from "../Pages/Questionspage"
import Answerpage from "../Pages/Answer"
export default function Routing (){
    return<>
<BrowserRouter>
<Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/questions" element={<Questionspage/>}/>
    <Route path="/answers/:id" element={<Answerpage/>}/>
</Routes>
</BrowserRouter>
    </>
}