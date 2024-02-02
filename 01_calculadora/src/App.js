import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './styles'
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState('');
  let resultado;
  const handleOnClear = () => {
    setCurrentNumber(0);
    setFirstNumber(0);
    setResult(0);
    setOperation('');
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => {
      if(prev === 0|| prev === result) {
        return num
      } else {
        return prev + num
      }

    });
  }

  const handleSumNumbers = () => {
    if (firstNumber === 0) {
      setFirstNumber((currentNumber));
      setCurrentNumber(0);
    }
    else {
      resultado = Number(firstNumber) + Number(currentNumber);
      setFirstNumber(resultado);
      setCurrentNumber(resultado);
      setResult(resultado);
    }
  }

  // const handleMinusNumbers = () => {
  //   if (firstNumber === 0) {
  //     setFirstNumber((currentNumber));
  //     setCurrentNumber(0);
  //   }
  //   else {
  //     resultado = Number(firstNumber) - Number(currentNumber);
  //     setFirstNumber(resultado);
  //     setCurrentNumber(resultado);
  //     setResult(resultado);
  //   }
  // }

  const handleEquals = () => {
    if (firstNumber !== 0 && operation !== '' && currentNumber !== 0) {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          // handleMinusNumbers();
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="AC" onClick={handleOnClear} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="/" />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="*" />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="-" />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="." onClick={() => handleAddNumber('.')} />
          <Button label="=" onClick={handleEquals} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <div>
            <p>
              current - {currentNumber} <br />
              first - {firstNumber} <br />
              result - {result}
            </p>
          </div>
        </Row>
      </Content>
    </Container>
  );
}

export default App;


