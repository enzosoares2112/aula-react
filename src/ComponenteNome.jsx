
 
import { UserState} from "react";
 function ComponenteNome() {

 comst [nome, setnome] = useState("SEU NOME")

userEffect (()=>{


    alert('o altera o nome para $(nome)')


},[nome])
 return(
<div>

<button onClick={() =>setnome("tico")} >alternar para apelido </button>
<button onClick={() =>setNome("enzo") }>alternar para nome </button> 


<p> Nome: props.enzo</p>
</div>

 )
 }

 export{ComponenteNome}


 
return{
    <>
    
    <row classname="justify-content-md-center">
    <col md=(2)>
    <h1>ListaProdutos</h1>
    </col>
    </row>
   
    </>
}