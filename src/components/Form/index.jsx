import { useState } from 'react';
import TextBox from '../TextBox';
import ComboBox from '../ComboBox';
import Button from '../Button';
import './Form.css';

export default function Form({ Teams, NewCollaborator }) {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const handleSubmit = (collaborator) => {
        collaborator.preventDefault(); NewCollaborator({ name, position, image, team });
        setName('');
        setPosition('');
        setImage('');
        setTeam('');
    };

    return (
        <section className="form">
            <form onSubmit={handleSubmit}>
                <TextBox value={name} setValue={setName} required label="Nome" placeholder="Digite seu nome" />
                <TextBox value={position} setValue={setPosition} required label="Cargo" placeholder="Digite seu cargo" />
                <TextBox value={image} setValue={setImage} label="Imagem" placeholder="Selecione uma imagem" />
                <ComboBox value={team} setValue={setTeam} required label="Time" itens={Teams} placeholder="Selecione um time" />
                <Button text="CRIAR CARD" type="submit" />
            </form>
        </section>
    );
}
