import React from 'react'
import firstPic from '../images/1st.jpg'
import secondPic from '../images/2nd.jpg'
import thirdPic from '../images/3rd.jpg'
import fourthPic from '../images/4th.jpg'
import fifthPic  from '../images/5th.jpg'
import sixthPic from '../images/6th.jpg'
import seventhPic from '../images/7th.jpg'
import eighthPic from '../images/8th.jpg'
import ninethPic from '../images/9th.jpg'
import tenthPic from  '../images/10th.jpg'
import eleventhPic from '../images/11st.jpg'
import twelfthPic from '../images/12nd.jpg'
import thirteenthPic from '../images/13rd.jpg'
import fourteenthPic from '../images/14th.jpg'
import fifteenthPic from '../images/15th.jpg'
import sixteenthPic from '../images/16th.jpg'
import seventeenthPic from '../images/17th.jpg'
import eighteenthPic from '../images/18th.jpg'
import nineteenthPic from '../images/19th.jpg'
import twentiethPic from  '../images/20th.jpg'
import twentyfirstPic from '../images/21st.jpg'
import twentysecondPic from '../images/22nd.jpg'
import twentythirdPic from  '../images/23rd.jpg'
import twentyfourthPic from '../images/24th.jpg'
import twentyfifthPic from '../images/25th.jpg'
import twentysixthPic from '../images/26th.jpg'
import twentyseventhPic from '../images/27th.jpg'


var i = 0;

console.log(i)


const overViewData = {
    title: "Final Fantasy VIII",

    first: "Final Fantasy VIII is a role-playing video game developed and published by Square for the PlayStation console. Released in 1999, it is the eighth main installment in the Final Fantasy series. Set on an unnamed fantasy world with science fiction elements, the game follows a group of young mercenaries, led by Squall Leonhart, as they are drawn into a conflict sparked by Ultimecia, a sorceress from the future who wishes to compress time. During the quest to defeat Ultimecia, Squall struggles with his role as leader and develops a romance with one of his comrades, Rinoa Heartilly ",

    second:"Development began in 1997, during the English localization of Final Fantasy VII. The game builds on the visual changes brought to the series by Final Fantasy VII, including the use of 3D graphics and pre-rendered backgrounds, while also departing from many Final Fantasy traditions. It is the first Final Fantasy to use realistically proportioned characters consistently, feature a vocal piece as its theme music, and forgo the use of magic points for spellcasting.",

    third:"Like the Final Fantasy games before it, Final Fantasy VIII consists of three main modes of play: the world map, the field map, and the battle screen. The world map is a 3D display in which the player may navigate freely across a small-scale rendering of the game world. Characters travel across the world map in a variety of ways, including by foot, car, Chocobo, train, and airship. The field map consists of controllable 3D characters overlaid on one or more 2D pre-rendered backgrounds, which represent environmental locations such as towns or forests. The battle screen is a 3D model of a location such as a street or room, where turn-based fights between playable characters and CPU-controlled enemies take place. The interface is menu-driven, as in previous titles, but with the typical weapon and armor systems removed and new features present, such as the Junction system. Also featured is a collectible card-based minigame called \"Triple Triad\". " ,

    fourth: "For Final Fantasy VIII, Hiroyuki Ito designed a battle system based on summoned monsters, called  \"Guardian Forces\", abbreviated in-game as \"GF\". Assigning (\"junctioning\") a GF onto a character allows the player to use battle commands beyond Attack with the main weapon, such as Magic, GF (to have a junctioned GF perform an action), and Item. Previous Final Fantasy titles provided each character with a limited pool of magic points that were consumed by each spell; in Final Fantasy VIII, spells are acquired (\"drawn\") either from enemies in battle, Draw Points distributed throughout the environments, or by refining items and cards. Spells are then stocked on characters as quantified inventory (up to 100 per spell and limited to 32 distinct spells per character) and are consumed one by one when used. Characters can also junction (equip) these spells onto their statistics—such as Strength, Vitality, and Luck—for various bonuses, provided the character has junctioned a Guardian Force The junction system's flexibility affords the player a wide range of customization.",

    fifth: "Most of Final Fantasy VIII is set on an unnamed fantasy world. The setting is highly European in design and features a blend of modern and futuristic locales. The planet contains five major landmasses, with Esthar, the largest, covering most of the eastern portion of the map. Galbadia, the second-largest continent, lies to the west, and contains many of the game's locations. The northernmost landmass is Trabia, an Arctic region. Positioned roughly in the middle of the world map lies Balamb, the smallest continent, the island on which the game begins. The remaining landmass is small and mostly desolate, riddled with rough, rocky terrain caused by the impact of a \"Lunar Cry\", an event where monsters from the moon fall to the planet.The southernmost landmass includes an archipelago of broken sections of land that have drifted apart. Islands and marine structures flesh out the game world, and a handful of off-world locations round out the playable areas.",

    sixth:"The six main protagonists of Final Fantasy VIII are: Squall Leonhart, a loner who avoids vulnerability by focusing on his duty; Rinoa Heartilly, an outspoken and passionate young woman who follows her heart; Quistis Trepe, an instructor with a serious, patient attitude; Zell Dincht, an energetic martial artist with a fondness for hot dogs; Selphie Tilmitt, a cheerful girl who loves trains and pilots the airship Ragnarok; and Irvine Kinneas, a marksman and consummate ladies' man. All but Rinoa are members of \"SeeD\", an elite military force based out of futuristic installations called Gardens. Temporarily playable characters include Laguna Loire, Kiros Seagill, and Ward Zabac, who appear in \"flashback\" sequences; SeeD cadet-turned-antagonist Seifer Almasy; and sorceress Edea Kramer. The main antagonist is Ultimecia, a sorceress from the future who wishes to compress time."

}

const galleryData = {
    first: "Liberi Fatali",
    second: "Fight under Rain",
    third: "A witch",
    fourth:"Rivalry",
    fifth: "Strong Bond",
    sixth: "Desesperate Plan",
    seventh: "Edea",
    eighth: "No mercy",
    nineth: "Revenge",
    tenth: "Opposite Paths",
    eleventh:"Love",
    twelfth:"Instructor",
    thirteenth:"An Hyperactive Fighter",
    fourteenth:"A garden for Seeds",
    fifteenth: "Beatiful inocence",
    sixteenth:"Dream view",
    seventeenth:"Wicth knigth",
    eighteenth:"Walk through the moon",
    nineteenth:"Funny Cowboy",
    twentieth:"Danger",
    twentyfirst:"Migthy Power",
    twentysecond:"Get it over it",
    twentythird:"Race to battle",
    twentyfourth:"Trial to death",
    twentyfifth:"Pain",
    twentysixth:"Falling to oblivion",
    twentyseventh:"Dispair"
    

}



class Main extends React.Component{
   constructor(props){
    super(props)

    this.leftButton = this.leftButton.bind(this)
    this.rightButton = this.rightButton.bind(this)
    this.overViewButton = this.overViewButton.bind(this)
    this.galleryButton = this.galleryButton.bind(this)
    this.grightButton = this.grightButton.bind(this)
    this.gleftButton = this.gleftButton.bind(this)

    this.state = {
        currentTap: <div>
            
        <button type="button" onClick={this.leftButton}> L</button> 

        <h2>{overViewData.title}</h2> 
        <p> {overViewData.first}</p>
        <p> {overViewData.second}</p>

        <button type="button" onClick={this.rightButton}>R</button> 

        </div>
    }
}

leftButton(){

    switch(i){

        case 2:  
        this.setState({
            currentTap: <div>
                
            <button type="button" onClick={this.leftButton}> L</button> 
    
            <h2>{overViewData.title}</h2> 
            <p> {overViewData.third}</p>
            <p> {overViewData.fourth}</p>
    
            <button type="button" onClick={this.rightButton}>R</button> 
    
            </div>
          });
         i--;
         break;
         
         case 1:
            this.setState({
                currentTap: <div>
                    
                <button type="button" onClick={this.leftButton}> L</button> 
        
                <h2>{overViewData.title}</h2> 
                <p> {overViewData.first}</p>
                <p> {overViewData.second}</p>
        
                <button type="button" onClick={this.rightButton}>R</button> 
        
                </div>
              }); 
              i--;
              break;
              
              default:
               console.log("default");
               break;   
    
    
    
    
        }

   
}

rightButton(){

    switch(i){

    case 0:  
    this.setState({
        currentTap: <div>
            
        <button type="button" onClick={this.leftButton}> L</button> 

        <h2>{overViewData.title}</h2> 
        <p> {overViewData.third}</p>
        <p> {overViewData.fourth}</p>

        <button type="button" onClick={this.rightButton}>R</button> 

        </div>
      });
     i++;
     break;
     
     case 1:
        this.setState({
            currentTap: <div>
                
            <button type="button" onClick={this.leftButton}> L</button> 
    
            <h2>{overViewData.title}</h2> 
            <p> {overViewData.fifth}</p>
            <p> {overViewData.sixth}</p>
    
            <button type="button" onClick={this.rightButton}>R</button> 
    
            </div>
          }); 
          i++;
          break;
        
          
          default:
           console.log("default");
           break;   




    }
    
} 

grightButton(){
    switch(i){
        case 0:
        this.setState({
                currentTap: <div>
                    
               <button type="button" onClick={this.gleftButton}>L</button> 
        
               <h3>{galleryData.second}</h3> 
               <div><img src={secondPic} alt="secondPic"></img></div>
               
        
                <button type="button"onClick={this.grightButton}>R</button> 
        
                </div>
              }); 
              i++;
              break;    
      case 1: 
      this.setState({
        currentTap: <div>
            
       <button type="button" onClick={this.gleftButton}>L</button> 

       <h3>{galleryData.third}</h3> 
       <div><img src={thirdPic} alt="thirdPic"></img></div>
       

        <button type="button"onClick={this.grightButton}>R</button> 

        </div>
      }); 
      i++;
      break;
      
      case 2:
        this.setState({
            currentTap: <div>
                
           <button type="button" onClick={this.gleftButton}>L</button> 
    
           <h3>{galleryData.fourth}</h3> 
           <div><img src={fourthPic} alt="fourthPic"></img></div>
           
    
            <button type="button"onClick={this.grightButton}>R</button> 
    
            </div>
          }); 
          i++;
          break;  
     case 3:
        this.setState({
            currentTap: <div>
                
           <button type="button" onClick={this.gleftButton}>L</button> 
    
           <h3>{galleryData.fifth}</h3> 
           <div><img src={fifthPic} alt="fifthPic"></img></div>
           
    
            <button type="button"onClick={this.grightButton}>R</button> 
    
            </div>
          }); 
          i++;
          break;
          
      case 4: 
      this.setState({
        currentTap: <div>
            
       <button type="button" onClick={this.gleftButton}>L</button> 

       <h3>{galleryData.sixth}</h3> 
       <div><img src={sixthPic} alt="sixthPic"></img></div>
       

        <button type="button"onClick={this.grightButton}>R</button> 

        </div>
      }); 
      i++;
      break; 
    case 5:
        this.setState({
            currentTap: <div>
                
           <button type="button" onClick={this.gleftButton}>L</button> 
    
           <h3>{galleryData.seventh}</h3> 
           <div><img src={seventhPic} alt="seventhPic"></img></div>
           
    
            <button type="button"onClick={this.grightButton}>R</button> 
    
            </div>
          }); 
          i++;
          break;
     case 6: 
     
     this.setState({
        currentTap: <div>
            
       <button type="button" onClick={this.gleftButton}>L</button> 

       <h3>{galleryData.eighth}</h3> 
       <div><img src={eighthPic} alt="eighthPic"></img></div>
       

        <button type="button"onClick={this.grightButton}>R</button> 

        </div>
      }); 
      i++;
      break;
     case 7:
        this.setState({
            currentTap: <div>
                
           <button type="button" onClick={this.gleftButton}>L</button> 
    
           <h3>{galleryData.nineth}</h3> 
           <div><img src={ninethPic} alt="ninethPic"></img></div>
           
    
            <button type="button"onClick={this.grightButton}>R</button> 
    
            </div>
          }); 
          i++;
          break;   

     case 8:
        this.setState({
            currentTap: <div>
                
           <button type="button" onClick={this.gleftButton}>L</button> 
    
           <h3>{galleryData.tenth}</h3> 
           <div><img src={tenthPic} alt="tenthPic"></img></div>
           
    
            <button type="button"onClick={this.grightButton}>R</button> 
    
            </div>
          }); 
          i++;
          break;
     case 9: 
     this.setState({
        currentTap: <div>
            
       <button type="button" onClick={this.gleftButton}>L</button> 

       <h3>{galleryData.eleventh}</h3> 
       <div><img src={eleventhPic} alt="eleventhPic"></img></div>
       

        <button type="button"onClick={this.grightButton}>R</button> 

        </div>
      }); 
      i++;
      break;
     
     case 10: 
     this.setState({
        currentTap: <div>
            
       <button type="button" onClick={this.gleftButton}>L</button> 

       <h3>{galleryData.twelfth}</h3> 
       <div><img src={twelfthPic} alt="twelfthPic"></img></div>
       

        <button type="button"onClick={this.grightButton}>R</button> 

        </div>
      }); 
      i++;
      break; 
     
     case 11:
        this.setState({
            currentTap: <div>
                
           <button type="button" onClick={this.gleftButton}>L</button> 
    
           <h3>{galleryData.thirteenth}</h3> 
           <div><img src={thirteenthPic} alt="thirteenthPic"></img></div>
           
    
            <button type="button"onClick={this.grightButton}>R</button> 
    
            </div>
          }); 
          i++;
          break; 

    case 12: 
    this.setState({
        currentTap: <div>
            
       <button type="button" onClick={this.gleftButton}>L</button> 

       <h3>{galleryData.fourteenth}</h3> 
       <div><img src={fourteenthPic} alt="fourteenthPic"></img></div>
       

        <button type="button"onClick={this.grightButton}>R</button> 

        </div>
      }); 
      i++;
      break; 
    
    case 13:
        this.setState({
            currentTap: <div>
                
           <button type="button" onClick={this.gleftButton}>L</button> 
    
           <h3>{galleryData.fifteenth}</h3> 
           <div><img src={fifteenthPic} alt="fifteenthPic"></img></div>
           
    
            <button type="button"onClick={this.grightButton}>R</button> 
    
            </div>
          }); 
          i++;
          break;  
      case 14:
        this.setState({
            currentTap: <div>
                
           <button type="button" onClick={this.gleftButton}>L</button> 
    
           <h3>{galleryData.sixteenth}</h3> 
           <div><img src={sixteenthPic} alt="fifteenthPic"></img></div>
           
    
            <button type="button"onClick={this.grightButton}>R</button> 
    
            </div>
          }); 
          i++;
          break;          
       case 15:
        this.setState({
            currentTap: <div>
                
           <button type="button" onClick={this.gleftButton}>L</button> 
    
           <h3>{galleryData.seventeenth}</h3> 
           <div><img src={seventeenthPic} alt="seventeenthPic"></img></div>
           
    
            <button type="button"onClick={this.grightButton}>R</button> 
    
            </div>
          }); 
          i++;
          break; 
          
       case 16:
        this.setState({
            currentTap: <div>
                
           <button type="button" onClick={this.gleftButton}>L</button> 
    
           <h3>{galleryData.eighteenth}</h3> 
           <div><img src={eighteenthPic} alt="eighteenthPic"></img></div>
           
    
            <button type="button"onClick={this.grightButton}>R</button> 
    
            </div>
          }); 
          i++;
          break; 
        case 17:
            this.setState({
                currentTap: <div>
                    
               <button type="button" onClick={this.gleftButton}>L</button> 
        
               <h3>{galleryData.nineteenth}</h3> 
               <div><img src={nineteenthPic} alt="nineteenthPic"></img></div>
               
        
                <button type="button"onClick={this.grightButton}>R</button> 
        
                </div>
              }); 
              i++;
              break;        
          case 18:
            this.setState({
                currentTap: <div>
                    
               <button type="button" onClick={this.gleftButton}>L</button> 
        
               <h3>{galleryData.twentieth}</h3> 
               <div><img src={twentiethPic} alt="twentiethPic"></img></div>
               
        
                <button type="button"onClick={this.grightButton}>R</button> 
        
                </div>
              }); 
              i++;
              break;  
           case 19:
            this.setState({
                currentTap: <div>
                    
               <button type="button" onClick={this.gleftButton}>L</button> 
        
               <h3>{galleryData.twentyfirst}</h3> 
               <div><img src={twentyfirstPic} alt="twentyfirstPic"></img></div>
               
        
                <button type="button"onClick={this.grightButton}>R</button> 
        
                </div>
              }); 
              i++;
              break; 
              
          case 20: 
          this.setState({
            currentTap: <div>
                
           <button type="button" onClick={this.gleftButton}>L</button> 
    
           <h3>{galleryData.twentysecond}</h3> 
           <div><img src={twentysecondPic} alt="twentysecondPic"></img></div>
           
    
            <button type="button"onClick={this.grightButton}>R</button> 
    
            </div>
          }); 
          i++;
          break; 
         case 21:
            this.setState({
                currentTap: <div>
                    
               <button type="button" onClick={this.gleftButton}>L</button> 
        
               <h3>{galleryData.twentythird}</h3> 
               <div><img src={twentythirdPic} alt="twentythirdPic"></img></div>
               
        
                <button type="button"onClick={this.grightButton}>R</button> 
        
                </div>
              }); 
              i++;
              break;  
              
           case 22:    
           this.setState({
            currentTap: <div>
                
           <button type="button" onClick={this.gleftButton}>L</button> 
    
           <h3>{galleryData.twentyfourth}</h3> 
           <div><img src={twentyfourthPic} alt="twentyfourthPic"></img></div>
           
    
            <button type="button"onClick={this.grightButton}>R</button> 
    
            </div>
          }); 
          i++;
          break;  

        case 23:
            this.setState({
                currentTap: <div>
                    
               <button type="button" onClick={this.gleftButton}>L</button> 
        
               <h3>{galleryData.twentyfifth}</h3> 
               <div><img src={twentyfifthPic} alt="twentyfifthPic"></img></div>
               
        
                <button type="button"onClick={this.grightButton}>R</button> 
        
                </div>
              }); 
              i++;
              break; 
       case 24: 
       this.setState({
        currentTap: <div>
            
       <button type="button" onClick={this.gleftButton}>L</button> 

       <h3>{galleryData.twentysixth}</h3> 
       <div><img src={twentysixthPic} alt="twentysixthPic"></img></div>
       

        <button type="button"onClick={this.grightButton}>R</button> 

        </div>
      }); 
      i++;
      break;
    case 25:
        this.setState({
            currentTap: <div>
                
           <button type="button" onClick={this.gleftButton}>L</button> 
    
           <h3>{galleryData.twentyseventh}</h3> 
           <div><img src={twentyseventhPic} alt="twentyseventhPic"></img></div>
           
    
            <button type="button"onClick={this.grightButton}>R</button> 
    
            </div>
          }); 

          i++;
          break;
            
      
          default:
            console.log("default");
            break;   
 

    }
}

gleftButton(){
    switch(i){
        case 26:
        this.setState({
            currentTap: <div>
                
           <button type="button" onClick={this.gleftButton}>L</button> 
    
           <h3>{galleryData.twentysixth}</h3> 
           <div><img src={twentysixthPic} alt="twentysixthPic"></img></div>
           
    
            <button type="button"onClick={this.grightButton}>R</button> 
    
            </div>
          }); 
          i--;
          break; 

          case 25:
        this.setState({
            currentTap: <div>
                
           <button type="button" onClick={this.gleftButton}>L</button> 
    
           <h3>{galleryData.twentyfifth}</h3> 
           <div><img src={twentyfifthPic} alt="twentyfifthPic"></img></div>
           
    
            <button type="button"onClick={this.grightButton}>R</button> 
    
            </div>
          }); 
          i--;
          break;  

          case 24:
        this.setState({
            currentTap: <div>
                
           <button type="button" onClick={this.gleftButton}>L</button> 
    
           <h3>{galleryData.twentyfourth}</h3> 
           <div><img src={twentyfourthPic} alt="twentyfourthPic"></img></div>
           
    
            <button type="button"onClick={this.grightButton}>R</button> 
    
            </div>
          }); 
          i--;
          break;  

          case 23:
            this.setState({
                currentTap: <div>
                    
               <button type="button" onClick={this.gleftButton}>L</button> 
        
               <h3>{galleryData.twentythird}</h3> 
               <div><img src={twentythirdPic} alt="twentythirdPic"></img></div>
               
        
                <button type="button"onClick={this.grightButton}>R</button> 
        
                </div>
              }); 
              i--;
              break; 

              case 22:
                this.setState({
                    currentTap: <div>
                        
                   <button type="button" onClick={this.gleftButton}>L</button> 
            
                   <h3>{galleryData.twentysecond}</h3> 
                   <div><img src={twentysecondPic} alt="twentysecondPic"></img></div>
                   
            
                    <button type="button"onClick={this.grightButton}>R</button> 
            
                    </div>
                  }); 
                  i--;
                  break; 

                  case 21:
                this.setState({
                    currentTap: <div>
                        
                   <button type="button" onClick={this.gleftButton}>L</button> 
            
                   <h3>{galleryData.twentyfirst}</h3> 
                   <div><img src={twentyfirstPic} alt="twentyfirstPic"></img></div>
                   
            
                    <button type="button"onClick={this.grightButton}>R</button> 
            
                    </div>
                  }); 
                  i--;
                  break;  
                  
                  case 20:
                    this.setState({
                        currentTap: <div>
                            
                       <button type="button" onClick={this.gleftButton}>L</button> 
                
                       <h3>{galleryData.twentieth}</h3> 
                       <div><img src={twentiethPic} alt="twentiethPic"></img></div>
                       
                
                        <button type="button"onClick={this.grightButton}>R</button> 
                
                        </div>
                      }); 
                      i--;
                      break;     

                      case 19:
                        this.setState({
                            currentTap: <div>
                                
                           <button type="button" onClick={this.gleftButton}>L</button> 
                    
                           <h3>{galleryData.nineteenth}</h3> 
                           <div><img src={nineteenthPic} alt="nineteenthPic"></img></div>
                           
                    
                            <button type="button"onClick={this.grightButton}>R</button> 
                    
                            </div>
                          }); 
                          i--;
                          break;  
                          
                          case 18:
                            this.setState({
                                currentTap: <div>
                                    
                               <button type="button" onClick={this.gleftButton}>L</button> 
                        
                               <h3>{galleryData.eighteenth}</h3> 
                               <div><img src={eighteenthPic} alt="eighteenthPic"></img></div>
                               
                        
                                <button type="button"onClick={this.grightButton}>R</button> 
                        
                                </div>
                              }); 
                              i--;
                              break; 
                              
                              case 17:
                            this.setState({
                                currentTap: <div>
                                    
                               <button type="button" onClick={this.gleftButton}>L</button> 
                        
                               <h3>{galleryData.seventeenth}</h3> 
                               <div><img src={seventeenthPic} alt="seventeenthPic"></img></div>
                               
                        
                                <button type="button"onClick={this.grightButton}>R</button> 
                        
                                </div>
                              }); 
                              i--;
                              break;
                              
                              case 16:
                                this.setState({
                                    currentTap: <div>
                                        
                                   <button type="button" onClick={this.gleftButton}>L</button> 
                            
                                   <h3>{galleryData.sixteenth}</h3> 
                                   <div><img src={sixteenthPic} alt="sixteenthPic"></img></div>
                                   
                            
                                    <button type="button"onClick={this.grightButton}>R</button> 
                            
                                    </div>
                                  }); 
                                  i--;
                                  break;
                                  
                                  case 15:
                                    this.setState({
                                        currentTap: <div>
                                            
                                       <button type="button" onClick={this.gleftButton}>L</button> 
                                
                                       <h3>{galleryData.fifteenth}</h3> 
                                       <div><img src={fifteenthPic} alt="sixteenthPic"></img></div>
                                       
                                
                                        <button type="button"onClick={this.grightButton}>R</button> 
                                
                                        </div>
                                      }); 
                                      i--;
                                      break; 
                                      
                                      case 14:
                                        this.setState({
                                            currentTap: <div>
                                                
                                           <button type="button" onClick={this.gleftButton}>L</button> 
                                    
                                           <h3>{galleryData.fourteenth}</h3> 
                                           <div><img src={fourteenthPic} alt="fourteenthPic"></img></div>
                                           
                                    
                                            <button type="button"onClick={this.grightButton}>R</button> 
                                    
                                            </div>
                                          }); 
                                          i--;
                                          break;

                                         case 13:
                                        this.setState({
                                            currentTap: <div>
                                                
                                           <button type="button" onClick={this.gleftButton}>L</button> 
                                    
                                           <h3>{galleryData.thirteenth}</h3> 
                                           <div><img src={thirteenthPic} alt="thirteenthPic"></img></div>
                                           
                                    
                                            <button type="button"onClick={this.grightButton}>R</button> 
                                    
                                            </div>
                                          }); 
                                          i--;
                                          break;  

                                         case 12:
                                        this.setState({
                                            currentTap: <div>
                                                
                                           <button type="button" onClick={this.gleftButton}>L</button> 
                                    
                                           <h3>{galleryData.twelfth}</h3> 
                                           <div><img src={twelfthPic} alt="fourteenthPic"></img></div>
                                           
                                    
                                            <button type="button"onClick={this.grightButton}>R</button> 
                                    
                                            </div>
                                          }); 
                                          i--;
                                          break;
        case 11:
        this.setState({
            currentTap: <div>
                
           <button type="button" onClick={this.gleftButton}>L</button> 
    
           <h3>{galleryData.eleventh}</h3> 
           <div><img src={eleventhPic} alt="eleventhPic"></img></div>
           
    
            <button type="button"onClick={this.grightButton}>R</button> 
    
            </div>
          }); 
          i--;
          break;

          case 10:
            this.setState({
                currentTap: <div>
                    
               <button type="button" onClick={this.gleftButton}>L</button> 
        
               <h3>{galleryData.tenth}</h3> 
               <div><img src={tenthPic} alt="tenthPic"></img></div>
               
        
                <button type="button"onClick={this.grightButton}>R</button> 
        
                </div>
              }); 
              i--;
              break;
              
           case 9:
            this.setState({
                currentTap: <div>
                    
               <button type="button" onClick={this.gleftButton}>L</button> 
        
               <h3>{galleryData.nineth}</h3> 
               <div><img src={ninethPic} alt="ninethPic"></img></div>
               
        
                <button type="button"onClick={this.grightButton}>R</button> 
        
                </div>
              }); 
              i--;
              break;
              
            case 8:
                this.setState({
                    currentTap: <div>
                        
                   <button type="button" onClick={this.gleftButton}>L</button> 
            
                   <h3>{galleryData.eighth}</h3> 
                   <div><img src={eighthPic} alt="eighthPic"></img></div>
                   
            
                    <button type="button"onClick={this.grightButton}>R</button> 
            
                    </div>
                  }); 
                  i--;
                  break;
                 
            case 7:
                this.setState({
                    currentTap: <div>
                        
                   <button type="button" onClick={this.gleftButton}>L</button> 
            
                   <h3>{galleryData.seventh}</h3> 
                   <div><img src={seventhPic} alt="seventhPic"></img></div>
                   
            
                    <button type="button"onClick={this.grightButton}>R</button> 
            
                    </div>
                  }); 
                  i--;
                  break;

            case 6:
                this.setState({
                    currentTap: <div>
                        
                   <button type="button" onClick={this.gleftButton}>L</button> 
            
                   <h3>{galleryData.sixth}</h3> 
                   <div><img src={sixthPic} alt="sixthPic"></img></div>
                   
            
                    <button type="button"onClick={this.grightButton}>R</button> 
            
                    </div>
                  }); 
                  i--;
                  break;

            case 5:
                this.setState({
                    currentTap: <div>
                        
                   <button type="button" onClick={this.gleftButton}>L</button> 
            
                   <h3>{galleryData.fifth}</h3> 
                   <div><img src={fifthPic} alt="fifthPic"></img></div>
                   
            
                    <button type="button"onClick={this.grightButton}>R</button> 
            
                    </div>
                  }); 
                  i--;
                  break;

                  case 4:
                    this.setState({
                        currentTap: <div>
                            
                       <button type="button" onClick={this.gleftButton}>L</button> 
                
                       <h3>{galleryData.fourth}</h3> 
                       <div><img src={fourthPic} alt="fourthPic"></img></div>
                       
                
                        <button type="button"onClick={this.grightButton}>R</button> 
                
                        </div>
                      }); 
                      i--;
                      break;

                  case 3:
                    this.setState({
                        currentTap: <div>
                            
                       <button type="button" onClick={this.gleftButton}>L</button> 
                
                       <h3>{galleryData.third}</h3> 
                       <div><img src={thirdPic} alt="thirdPic"></img></div>
                       
                
                        <button type="button"onClick={this.grightButton}>R</button> 
                
                        </div>
                      }); 
                      i--;
                      break;
                  
                    case 2:
                    this.setState({
                        currentTap: <div>
                            
                       <button type="button" onClick={this.gleftButton}>L</button> 
                
                       <h3>{galleryData.second}</h3> 
                       <div><img src={secondPic} alt="secondPic"></img></div>
                       
                
                        <button type="button"onClick={this.grightButton}>R</button> 
                
                        </div>
                      }); 
                      i--;
                      break;
                      
                      case 1:
                    this.setState({
                        currentTap: <div>
                            
                       <button type="button" onClick={this.gleftButton}>L</button> 
                
                       <h3>{galleryData.first}</h3> 
                       <div><img src={firstPic} alt="secondPic"></img></div>
                       
                
                        <button type="button"onClick={this.grightButton}>R</button> 
                
                        </div>
                      }); 
                    break;


                                          default:
            console.log("default");
            break;   
          

    }
}


overViewButton(){
   
    this.setState({
        currentTap: <div>
            
        <button type="button" onClick={this.leftButton}> L</button> 

        <h2>{overViewData.title}</h2> 
        <p> {overViewData.first}</p>
        <p> {overViewData.second}</p>

        <button type="button" onClick={this.rightButton}>R</button> 

        </div>
      });

   i = 0;   

}

galleryButton(){

    this.setState({
        currentTap: <div>
            
       <button type="button" onClick={this.gleftButton}>L</button> 

       <h3>{galleryData.first}</h3> 
       <div><img src={firstPic} alt="firstPic"></img></div>
       

        <button type="button"onClick={this.grightButton}>R</button> 

        </div>
      });
      i = 0;

}






render() {
    return (

<div>

    <div>
        <button type="button" onClick={this.overViewButton}>Overview</button>
        <button type="button" onClick={this.galleryButton}>Gallery</button>
        <button>Walkthrough</button>
        <button>Bestary</button>
    </div>

   <div>
     
   {this.state.currentTap}

   </div>

</div>



    )
}



}

export default Main