import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Evaluando componente <GifGrid />', () => {

  const category = 'One Punch';

  test('debe de mostrar el loading inicialmente', () => {

    useFetchGifs.mockReturnValue({//* Simula la funcion
      images: [],
      isLoading: true
    })

    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...'))
    expect(screen.getByText(category))

  });

  test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'http://localhost:8080/images/saitama'
      },
      {
        id: '123',
        title: 'Goku',
        url: 'http://localhost:8080/images/goku'
      }
    ]

    useFetchGifs.mockReturnValue({//* Simula la funcion
      images: gifs,
      isLoading: false
    })

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);

  });

})