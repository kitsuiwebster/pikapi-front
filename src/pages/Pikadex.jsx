import React from 'react';

import '../assets/scss/pages/Pikadex.scss';
import '../assets/scss/index.scss';
import pikachu from '../assets/images/pikachu.png';

function Pikadex() {
  return (
    <>
      <div id="pikadex">
        <div className='pikadex'>
          <h1 className='pikadex-title'>Pikadex</h1>
          <img className='pikadex-image' src={pikachu} alt="Pikachu" />
          
          <h2 className='pikadex-section-title'>Overview</h2>
          <p className='pikadex-text'>
            Pikachu (ピカチュウ Pikachuu) is an Electric-type Mouse Pokémon introduced in Generation I of the Pokémon video game series. It is one of the most iconic and well-known Pokémon, serving as the franchise's official mascot alongside Ash Ketchum's companion in the anime series. Pikachu is based on a mouse and has the unique ability to store and release vast amounts of electrical energy from the red pouches on its cheeks.
          </p>

          <h2 className='pikadex-section-title'>Appearance and Physiology</h2>
          <p className='pikadex-text'>
            Physically, Pikachu is a small, chubby rodent Pokémon with a round body covered in yellow fur. Its cheeks are adorned with red patches that can store electricity, and its tail resembles a lightning bolt shape. Pikachu has a small mouth, large eyes with white pupils, and two horizontal brown stripes on its back. Its arms are short, with yellow pads on the ends of its red forearms, and its feet have two toes each. Pikachu's physiology allows it to generate and manipulate electrical energy, making it a formidable Electric-type Pokémon.
          </p>

          <h2 className='pikadex-section-title'>Abilities and Movesets</h2>
          <p className='pikadex-text'>
            Pikachu's primary abilities are Static and Lightning Rod. Static allows Pikachu to paralyze an opponent if it is hit by a physical attack, while Lightning Rod draws in all Electric-type attacks to boost Pikachu's Special Attack stat. Its hidden ability is Volt Absorb, which allows Pikachu to completely absorb Electric-type moves and regain health from them.
          </p>
          <p className='pikadex-text'>
            Pikachu is capable of learning a diverse array of powerful Electric-type moves, including Thunderbolt, Thunder, Electro Ball, Discharge, Volt Tackle, Electroweb, Thunder Wave, and Nuzzle. Its strongest moveset typically includes Thunderbolt and Thunder, which are devastating Electric-type attacks known for their high power and accuracy. Pikachu's movepool, combined with its agility and speed, make it a formidable opponent in battle.
          </p>

          <h2 className='pikadex-section-title'>Anime and Movies</h2>
          <p className='pikadex-text'>
            In the Pokémon anime series, Pikachu is the beloved companion and partner of the main character, Ash Ketchum. Ash's Pikachu is unique in its refusal to stay inside a Pokéball and its close bond with its trainer. Pikachu has played a central role in the anime, accompanying Ash on his journey to become a Pokémon Master and forming unbreakable friendships with other characters like Misty, Brock, and various Pokémon companions. Pikachu's loyalty, courage, determination, and its ability to deliver powerful electric shocks have made it an iconic and beloved character among fans.
          </p>
          <p className='pikadex-text'>
            Pikachu has also appeared in various Pokémon movies, such as "Pokémon: The First Movie," "Pokémon 3: The Movie," "Pokémon: I Choose You!," and "Pokémon: Mewtwo Strikes Back—Evolution," where it has played pivotal roles in the storylines. In these movies, Pikachu has demonstrated its unwavering bond with Ash, its bravery in the face of adversity, and its impressive electric powers. The movies have further solidified Pikachu's status as a heroic and beloved character within the Pokémon universe.
          </p>

          <h2 className='pikadex-section-title'>Video Games and Merchandise</h2>
          <p className='pikadex-text'>
            In the video games, Pikachu is often available as a starter Pokémon or as a special encounter, allowing players to add this iconic Pokémon to their team early on. Pikachu has been featured on numerous pieces of merchandise, including plush toys, keychains, apparel, and even a limited-edition Pikachu Nintendo 3DS XL console. Pikachu's popularity has also led to various spin-off games, such as "Hey You, Pikachu!" and the "Pokémon Rumble" series, where Pikachu takes the lead role.
          </p>
          <p className='pikadex-text'>
            Pikachu's maximum CP (Combat Power) in Pokémon GO is 1,196, making it a powerful and sought-after Pokémon in the mobile game. However, its vulnerability to Ground-type moves is a notable weakness. In the main series games, Pikachu evolves from Pichu when its Friendship level is high enough, and it can further evolve into Raichu when exposed to a Thunder Stone.
          </p>

          <h2 className='pikadex-section-title'>Cultural Impact and Pop Culture</h2>
          <p className='pikadex-text'>
            Beyond its strength and abilities, Pikachu's enduring popularity can be attributed to its cute and appealing design, as well as its representation of the Pokémon franchise's values of friendship, perseverance, and the bond between Pokémon and their trainers. Pikachu has become a cultural icon, transcending the boundaries of the Pokémon franchise and becoming a widely recognized symbol worldwide. It has appeared in various crossover events, collaborations, and has even been featured in the Macy's Thanksgiving Day Parade as a giant balloon.
          </p>
          <p className='pikadex-text'>
            Pikachu's popularity has also led to numerous fan art, cosplay, and merchandise creations by the dedicated Pokémon community. Its iconic "Pika Pika" cry and its adorable expressions have been widely imitated and celebrated by fans around the world. In the Pokémon Trading Card Game, Pikachu has been featured on numerous card sets, including rare and highly sought-after promotional cards and secret rare variants. Pikachu cards are often considered valuable collectibles among avid Pokémon card collectors.
          </p>
          <p className='pikadex-text'>
            Pikachu's cultural impact extends beyond the Pokémon franchise, as it has become a recognizable pop culture icon. It has appeared in various forms of media, such as television shows, movies, and video games outside of the Pokémon universe, further solidifying its status as a beloved and iconic character. In recent years, Pikachu has also become associated with various charitable and environmental causes. The Pokémon Company has launched initiatives featuring Pikachu to raise awareness and funds for various organizations, further enhancing its image as a symbol of positivity and goodwill.
          </p>
          <p className='pikadex-text'>
            Pikachu's enduring popularity and cultural significance are a testament to the franchise's success and the character's ability to capture the hearts and imaginations of fans around the world. As the Pokémon franchise continues to evolve and expand, Pikachu remains a constant and beloved presence, ensuring its place in pop culture history.
          </p>

          <h3 className='pikadex-subtitle'>Abilities</h3>
          <ul className='pikadex-abilities'>
            <li>Static</li>
            <li>Lightning Rod</li>
            <li>Hidden Ability: Volt Absorb</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Pikadex;