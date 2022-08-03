import { LightningElement } from "lwc";

export default class App extends LightningElement {
    /**
     * montar um object para armazenar os dados dos inputs
     * 
     * onde a key será o nome dos inputs do componente
     */


    /**case  */
    account = {
      Name: "",
      Phone: "",
      Cpf__c: "",
      Email: ""
    };

    /**depois de colocar os dados no formulário teremos o objeto montado e pronto
     * para ser utilizado
     * 
     * account = {
     *  Name: "Filipe",
     *  Phone: "8899",
     *  Cpf__c: "00011122233",
     *  Email: "f@f.com"
     * }
     * 
     * handleInputChange(event)
     * 
     * essa função será responsavel por montar o object de account com os dados do campo
     * a cada modificação dos valores dos inputs
     * 
     * o campo que acionar a função terá seus dados passados para ela
     */

    handleInputChange(event){
        //recuperar o name do campo que está sendo chamado
        //console.log("Name: " + event.target.name);

        //recebe o valor do input que aciona a função.
        //console.log("value: " + event.detail.value);
        //name = recebe o nome do input que ativou a função
        let name = event.target.name;
        //value = recebe o valor do input que acionou a função
        let value = event.detail.value;

        /**
         * operador spread (...)
         * 
         */
        this.account = {
           ...this.account, [name]:value
        };

        console.log(this.account);
    }
  
}
