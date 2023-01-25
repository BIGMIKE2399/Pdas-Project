import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
function App(){
    return(
             <div>
              <section className = "hero is-primary">
                <div className = "hero-body">
                  <p className = "title">Personal Digital Assistant </p>
                </div>
                </section>
                <div className="container">
                  <section className = "section">
                    <div className = "columns">
                      <div className = "column is-4">
                      <ProfileCard title = "Alexa"
                       handle = "@alexa99"
                        image = {AlexaImage} 
                        description = "Amazon created this assistant to compliment their several accomodating services like Prime"
                        />
                      </div>
                      <div className = "column is-4">
                      <ProfileCard title = "Cortana"
                       handle = "@Cortana32"
                        image = {CortanaImage}
                        description = "Cortana is a personal assistant based on the popular video game franchise 'Halo'"
                        />
                      </div>
                      <div className = "column is-4">
                      <ProfileCard title = "Siri" 
                      handle = "@siri01" 
                      image = {SiriImage} 
                      description = "Siri has been a long time feature in iPhones that that has been upgraded and tweaked with each new realeas of iOS "
                      />
                      </div>
                      </div>
                      </section>
                      </div>

               
                
               
              </div>
    );
}

export default App;