import styled from "styled-components";


export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${p=>p.theme.spacing(8)};
  padding-bottom: ${p=>p.theme.spacing(12)};
`