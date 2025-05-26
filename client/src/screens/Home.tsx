import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JokeCard from '../components/JokeCard';

const Home: React.FC = () => {
  const [joke, setJoke] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomJoke = async () => {
    setLoading(true);
    setError(null);
    try {
      // Предположим, что твой API доступен по такому URL
      const response = await axios.get('http://localhost:5000/api/jokes/random');
      // Если API возвращает объект { joke: string }
      setJoke(response.data.joke);
    } catch (err: any) {
      setError(err.message || 'Ошибка при получении шутки');
    } finally {
      setLoading(false);
    }
  };

  // Получаем шутку при загрузке компонента
  useEffect(() => {
    fetchRandomJoke();
  }, []);

  return (
    <div style={styles.container}>
      <h1>Добро пожаловать в Joke API!</h1>
      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {joke && <JokeCard joke={joke} />}
      <button onClick={fetchRandomJoke} style={styles.button}>
        Получить ещё шутку
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
  } as React.CSSProperties,
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    marginTop: '1rem',
    cursor: 'pointer',
  } as React.CSSProperties,
};

export default Home;