function isRobotBack(moves: string): true | [number, number] {
  let processedMoves: string[] = []

  '*U'
  'UU'

  for (let i = 0; i < moves.length; i++) {
    if(moves[i] == '*') {
      processedMoves.push(moves[i+1])
      processedMoves.push(moves[i+1])
      i++
    } else if(moves[i] == '!') {
      let move = ''
      switch (moves[i + 1]) {
        case 'R':
          move = 'L'
          break
      
        case 'L':
          move = 'R'
          break
      
        case 'U':
          move = 'D'
          break
      
        case 'D':
          move = 'U'
          break

        default:
          break;
      }
      processedMoves.push(move)
      i++
    } else if(moves[i] == '?') {
      if(!processedMoves.includes(moves[i + 1])) {
        processedMoves.push(moves[i + 1])
      }
      i++
    } else {
      processedMoves.push(moves[i])
    }
  }

  console.log(moves)
  console.log(processedMoves)
  
  let initialPoint = [0, 0]
  processedMoves.forEach(move => {
    switch (move) {
      case 'U':
        initialPoint[1] += 1
        break;
        
      case 'D':
        initialPoint[1] -= 1
        break
        
      case 'R':
        initialPoint[0] += 1
        break
          
      case 'L':
        initialPoint[0] -= 1
        break
              
      default:
        break;
      }
    })
    
    console.log(initialPoint)
    console.log('---')
    
  return (initialPoint[0] === 0 && initialPoint[1] === 0) ? true : [initialPoint[0], initialPoint[1]]
}

isRobotBack('R')     // [1, 0]
isRobotBack('RL')    // true
isRobotBack('RLUD')  // true
isRobotBack('*RU')   // [2, 1]
isRobotBack('R*U')   // [1, 2]
isRobotBack('LLL!R') // [-4, 0]
isRobotBack('R?R')   // [1, 0]
isRobotBack('U?D')   // true
isRobotBack('R!L')   // [2,0]
isRobotBack('U!D')   // [0,2]
isRobotBack('R?L')   // true
isRobotBack('U?U')   // [0,1]
isRobotBack('*U?U')  // [0,2]
isRobotBack('U?D?U') // true
isRobotBack('R!U?U')
isRobotBack('UU!U?D')