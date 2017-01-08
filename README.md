
# REACT MAN

We set out to make a game, using only vanilla React, to investigate it's capabilities with as few packages as possible and no state management (no Flux or Redux).


## Game Logic

The entirety of the game logic is rounded around a singular state being a large array of objects that contain coordinates and boolean values.

These objects represent a tile with it's current status:
 - **Position**: Coordinates for 9x9 board position and for conditionals
 - **Player**: Boolean
 - **Bomb**: Boolean
 - **Wall**: Boolean
 - **Fire**: Boolean

 The full board is rendered every time the array is edited via the inputs of our players.

## Flow

#### Movement
The flow starts with our listener, looking for a keydown from either of our two players. When a direction is pressed, we run `movement()` with our player's current tile and the event. This returns an x and y coordinates with the proposed movement of the player. If a tile on the board exists and is considered "moveable" (ie no crate, bomb or player present), the objects/tiles with the old and new positions are then updated with the proper player booleans.

#### Drop Bomb
A timer is set for each bomb that is placed. The timer runs an explosion function after three seconds. With the tile coordinates of our bomb, we make a new array of arrays, one for each direction, containing our possible coordinates to be exploded. This is tricky: a crate should be destroyed but can be used as cover, a wall should not be destroyed and of course can be used as cover. We check that if one block away cannot explode, check the next direction. If that block can be destroyed and the first block was not a crate, the second block from the bomb explodes.


#### Animate / Win Condition

 Instead of removing the blocks that explode they are replace with fire. It works similarly in that there is a timer, but it is constantly running with a quicker interval. Even though it's slightly inconsistent, it works great with checking for a win condition. We circumvent having a max of 8 separate timers for each bomb explosion, and now if someone walks into a fire after explosion, that player is destroyed. When fire tiles/objects in the state are detected by the `clearFire()` function, the state is reset without the fire and the possible player who steps in. The win condition is satisfied on the next interval of our fireTimer, again filtering to see which players are still standing.

## What We Found:

You might ask, "Shouldn't each component handle their own state if they have their own data to manage?" After many revisions, we built the game differently for two big reasons:
- To our surprise... reasoning, testing and state management weren't our biggest issues; performance became the deciding factor! Performance was best when re-rendering the entire board. With their own logic and state, all components need to be "listening", this is super taxing. As many best practice documents state, the less amount of code in children components, the better.

- Conditionals became easier (more possible) to write. Keeping track of children states in the parent or container can be very cumbersome if you're not building a normal website. Instead, all logic is done in the parent component, "game state" can now be edited with mild filtering.


### Technology

- ReactJS
- `react-router`
- `react-addons-update` - Allows to update deeply nested objects within state.

### Contributors

- **Daniel Yochum**  •  GitHub: dannersy
- **Isaac Kang**  •  GitHub: isaackang
- **Shreiya Chowdhary**  •  GitHub: Shreiya


---

#### Sources:

Inspiration:
  Bomberman
  - Hudson Soft Co., Ltd

Bomb SFX
  http://audiosoundclips.com/wp-content/uploads/2015/01/8-Bit-SFX_Explosion_02.mp3
  - Provided by Jesus Lastra via audiosoundclips.com under the CC license

Music
  https://soundcloud.com/eric-skiff/all-of-us?in=eric-skiff/sets/resistor-anthems
  - Provided by Eric Skiff via soundcloud.com/eric-skiff under the CC license

Gif
  https://media1.giphy.com/avatars/haydiroket.gif
  - From http://giphy.com/haydiroket

About-Game Effect
  npm react-atv : https://www.npmjs.com/package/react-atv
  - By https://www.npmjs.com/~herrkris

All other icons and imagery
  - http://www.shutterstock.com/
