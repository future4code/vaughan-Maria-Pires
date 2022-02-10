import react from "react";
import styled from "styled-components";
import { AstromatchCard, Botoes } from "./style";



export default function ProfileCard() {
    return (
        <div>
            <AstromatchCard>
            <h3>Nome, idade</h3>
            <p>Bio</p>
            <p>Foto no background</p>
            <Botoes>
                <button>Like</button>
                <button>X</button>
            </Botoes>
            </AstromatchCard>
        </div>
    )
}