import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('Prueba componente AddCategory', () => {

  test('debe de cambiar el valor de la caja de texto', () => {
    const inputValue = 'Saitama'

    render(<AddCategory onNewCategory={() => { }} />)
    const input = screen.getByRole('textbox')

    fireEvent.input(input, { target: { value: inputValue } }) //* Simula un evento, por ejemplo que un usuario haga clic

    expect(input.value).toBe('Saitama')
    screen.debug();
  })

  test('debe de llamar onNewCategory', () => {
    const inputValue = 'Saitama'
    //?Funcion ficticia
    const onNewCategory = jest.fn()//* Simula una funcion

    render(<AddCategory onNewCategory={onNewCategory} />)//* Renderiza el componente

    const input = screen.getByRole('textbox');//* Extrae el input renderizado
    const form = screen.getByRole('form');//* Extrae el form renderizado

    fireEvent.input(input, { target: { value: inputValue } }) //* Simula un evento, por ejemplo que un usuario haga clic
    fireEvent.submit(form); //* Simula un evento de envio de formulario

    expect(input.value).toBe('')//* Evalua que el input este vacio despues del evento 'submit'

    expect(onNewCategory).toHaveBeenCalled();//* Evalua que la funcion ficticia haya sido llamada
    expect(onNewCategory).toHaveBeenCalledTimes(1);//* Evalua que la funcion ficticia haya sido llamada mas de dos veces
    expect(onNewCategory).toHaveBeenCalledWith(inputValue) //* Evalua que haya sido evaluada con el valor de la caja de texto

  })

  test('debe de llamar onNewCategory', () => {
    const inputValue = 'Saitama'
    //?Funcion ficticia
    const onNewCategory = jest.fn()//* Simula una funcion

    render(<AddCategory onNewCategory={onNewCategory} />)//* Renderiza el componente

    const input = screen.getByRole('textbox');//* Extrae el input renderizado
    const form = screen.getByRole('form');//* Extrae el form renderizado

    fireEvent.input(input, { target: { value: inputValue } }) //* Simula un evento, por ejemplo que un usuario haga clic
    fireEvent.submit(form); //* Simula un evento de envio de formulario

    expect(input.value).toBe('')//* Evalua que el input este vacio despues del evento 'submit'

    expect(onNewCategory).toHaveBeenCalled();//* Evalua que la funcion ficticia haya sido llamada
    expect(onNewCategory).toHaveBeenCalledTimes(1);//* Evalua que la funcion ficticia haya sido llamada mas de dos veces
    expect(onNewCategory).toHaveBeenCalledWith(inputValue) //* Evalua que haya sido evaluada con el valor de la caja de texto

  })

  test('no debe de llamar onNewCategory si el input esta vacio', () => {
    const inputValue = ''
    //?Funcion ficticia
    const onNewCategory = jest.fn()//* Simula una funcion

    render(<AddCategory onNewCategory={onNewCategory} />)//* Renderiza el componente

    const form = screen.getByRole('form');//* Extrae el form renderizado

    fireEvent.submit(form); //* Simula un evento de envio de formulario

    expect(onNewCategory).not.toHaveBeenCalled();//* Evalua que la funcion ficticia no haya sido llamada 

  })

})