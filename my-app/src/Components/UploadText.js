import React from 'react';
import axios from 'axios';
import './UploadText.css';

// import CohereSummary from './CohereSummary2Verygood';

export default class UploadText extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', out: '...', question: '... Generating Questions ...'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.CohereSummary = this.CohereSummary.bind(this);
      this.updateSummary = this.updateSummary.bind(this);
      this.updateQuestionGenerator = this.updateQuestionGenerator.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        event.preventDefault();
        console.log("hello")
        this.CohereSummary(this.state.value);
        this.CohereQuestionGenerator(this.state.value);
        // alert('A name was submitted: ' + this.state.value);
    }

    updateSummary = (response) => {
        this.setState({out: response.data.summary});
        console.log(response.data.summary);
    }

    CohereSummary(textToSummarize) {
      console.log('CohereSummaryCohereSummaryCohereSummaryCohereSummary')
        console.log(textToSummarize);
        let options = {
            method: 'POST',
            url: 'https://api.cohere.ai/v1/summarize',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: 'Bearer GpzUxj94voFnVUxKgbWQooaXdXOd7N2sgkqKMTfj'
            },
            data: {
                length: 'medium',
                format: 'bullets',
                model: 'summarize-xlarge',
                extractiveness: 'high',
                temperature: 0.1,
                text: textToSummarize
                // text: 'Ice cream is a sweetened frozen food typically eaten as a snack or dessert. It may be made from milk or cream and is flavoured with a sweetener, either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruit such as strawberries or peaches. It can also be made by whisking a flavored cream base and liquid nitrogen together. Food coloring is sometimes added, in addition to stabilizers. The mixture is cooled below the freezing point of water and stirred to incorporate air spaces and to prevent detectable ice crystals from forming. The result is a smooth, semi-solid foam that is solid at very low temperatures (below 2 °C or 35 °F). It becomes more malleable as its temperature increases.\n\nThe meaning of the name "ice cream" varies from one country to another. In some countries, such as the United States, "ice cream" applies only to a specific variety, and most governments regulate the commercial use of the various terms according to the relative quantities of the main ingredients, notably the amount of cream. Products that do not meet the criteria to be called ice cream are sometimes labelled "frozen dairy dessert" instead. In other countries, such as Italy and Argentina, one word is used fo\r all variants. Analogues made from dairy alternatives, such as goat\'s or sheep\'s milk, or milk substitutes (e.g., soy, cashew, coconut, almond milk or tofu), are available for those who are lactose intolerant, allergic to dairy protein or vegan.'
            }
        };
        // const [out, setOut] = useState();

        axios
            .request(options)
            .then(this.updateSummary
                // console.log(response.data.summary);
                // this.out = response.data.summary;
                // this.setState({out: response.data.summary});
            )
            .catch(function (error) {
                console.error(error);
            });
            
    }

    updateQuestionGenerator = (response) => {
      this.setState({question: response.data.generations[0].text});
      // this.setState({questionTwo: response.data.generations[1].text});
      // this.setState({questionThree: response.data.generations[2].text});
      console.log(response.data.generations[0].text);
  }

    CohereQuestionGenerator(textToQuiz) {
      console.log('generating questions from pomo');
      let queryOptions = {
          method: 'POST',
          url: 'https://api.cohere.ai/v1/generate',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Bearer GpzUxj94voFnVUxKgbWQooaXdXOd7N2sgkqKMTfj'
          },
          data: {
              model: 'command-xlarge-nightly',
              // num_generations: 3,
            temperature: 0.75,
            max_tokens: 150,
            stop_sequences: [],
            return_likelihoods: 'NONE',
            // truncate: 'END',
            k: 0,
            p: 0.75,
            prompt: 'Give me a numbered list of five questions about the following passage:' + textToQuiz
          }
        };

      axios
          .request(queryOptions)
          .then(this.updateQuestionGenerator
              // console.log('Question 1: ' + response.data.generations[0].text);
              // console.log('Question 2: ' + response.data.generations[1].text);
              // console.log('Question 3: ' + response.data.generations[2].text);
          )
          .catch(function (error) {
              console.error(error);
          });
  }
  
    render() {
      return (
        <div className='uploadText'>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h3>Enter text to summarize:</h3>
            <textarea rows="4" cols="40" value={this.state.value} onChange={this.handleChange} placeholder="type here..."></textarea>
          </label>
          <input className="summarize" type="submit" value="Summarize Text" />
        </form>
        <div className="cohere-div">
            {this.state.out}
        </div>
        <div className = "questionsList-div"> 
            <label>
              <h3> Here are questions that Pomo has generated for you: </h3>
            </label>
            <div className="question-div">
              {this.state.question}

            </div>
          </div>
        
        </div>
      );
    }


  }