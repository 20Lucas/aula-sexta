import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';

export default function App() {
	const [nome, setNome] = useState("");
	const [nomeTxt, setNomeTxt] = useState("");
	
	const[valor1, setValor1] = useState();
	const[valor2, setValor2] = useState();
	const[resultado, setResultado] = useState();
	
	function somar (){
		let resp = parseFloat(valor1) + parseFloat(valor2);
		setResultado(resp)
	} 
	function sub (){
		let resp = parseFloat(valor1) - parseFloat(valor2);
		setResultado(resp)
	}
	function div (){
		let resp = parseFloat(valor1) / parseFloat(valor2);
		setResultado(resp)
	} 
	function mult (){
		let resp = parseFloat(valor1) * parseFloat(valor2);
		setResultado(resp)
	}
	function lerNome(){
		setNome(nomeTxt);
	}
  return (
    <View style={styles.container}>
      
		<Text style={styles.titulo}>Teste</Text>

		  {/*<View style={styles.bloco}>
			   <Text style={styles.txtNome}> Nome: </Text>
			  <TextInput 
				  style={styles.input}
				  value={nomeTxt}
				  onChangeText={(texto)=>setNomeTxt(texto)}
			  />
			  <Text style={styles.txtNome}>Nome : {nome}</Text>

		  </View>
		  			  <TouchableOpacity style={styles.botao} onPress={lerNome}>
        <Text style={styles.txtBotao}>Aperte</Text>
      		</TouchableOpacity>
		  */}
			  <View style={styles.bloco}>
				  <Text style={styles.txtNome}>valor 1:  </Text>
				  <TextInput 
					  style={styles.input}
					  value={valor1}
					  onChangeText={(valor)=>setValor1(valor)}
				  />

			  </View>
		  
			  <View style={styles.bloco}>
				  <Text style={styles.txtNome}>valor 2:  </Text>
				  <TextInput 
					  style={styles.input}
					  value={valor2}
					  onChangeText={(valor)=>setValor2(valor)}
				  />
			  </View>
			<View style={styles.conta}>
				  <TouchableOpacity style={styles.botao2} onPress={somar}>
					<Text style={styles.txtBotao2}>Somar</Text>
					</TouchableOpacity>

				<TouchableOpacity style={styles.botao2} onPress={sub}>
					<Text style={styles.txtBotao2}>Subtrair</Text>
					</TouchableOpacity>

				 <TouchableOpacity style={styles.botao2} onPress={div}>
					<Text style={styles.txtBotao2}>Divisão</Text>
					</TouchableOpacity>

				<TouchableOpacity style={styles.botao2} onPress={mult}>
					<Text style={styles.txtBotao2}>Multiplicação</Text>
					</TouchableOpacity>
		  </View>
			  <View style={styles.bloco}>
				  <Text style={styles.txtNome}>resultado:  </Text>
			  <TextInput 
					style={styles.input}
					value={resultado}
					onChangeText={(resultado)=>setResultado(resultado)}  

				  />
			  </View>
		  
    </View>
  );
}

const styles = StyleSheet.create({
		botao:{
		backgroundColor:'#000',
		alignItems:'center',
		width : 200,
		marginTop: 20
	},
	
	txtBotao:{
		color:"#fff",
		fontSize:30
		
	},
	
	txtNome:{
		color:'#000',
		textAlign: 'center',
		fontSize:30
		
	},
  container: {
    flex: 1,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
	titulo:{
		fontSize:30,
		color:'#F00'
	},
	label:{
	  fontSize:30
	},
	input:{
		borderWidth:2,
		fontSize:20	
	},
	
	conta:{
		width: '100%',
		height: '10%',
		justifyContent:'center',
		flexDirection:'row',

	},
	
	botao2:{
		backgroundColor:'#000',
		justifyContent:'center',
		width : '15%',
		marginTop: 20,
		
	},
		txtBotao2:{
		textAlign: 'center',
		color: "#fff",
		fontSize: 25,
		
	},
	
});
