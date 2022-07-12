import { InformacoesPaisComponent } from './informacoes-pais.component';

let informacaoPais: InformacoesPaisComponent;

let populacaoPais: string;
let populacaoFormatadaNumber: number;
let populacaoFormatadaString: string;


export function indicadoresPaisFormt (
    paisJsonIndicadores: any
    ) {
    
    // for (let items of paisJsonIndicadores) {
    //     if (items.indicador === "População - População total") {
    //       populacaoPais = JSON.stringify(items.series[0].serie[49]);
    //       populacaoFormatadaString = informacaoPais.populacaoPais.slice(9, -2);
    //       populacaoFormatadaNumber = parseInt(populacaoFormatadaString);
    //       populacaoFormatadaString = (informacaoPais.populacaoFormatadaNumber).toLocaleString('pt-BR');
    //     }
    //     else if (items.indicador === "Economia - PIB per capita") {
    //       pibPerCapta = JSON.stringify(items.series[0].serie[49]);
    //       pibPerCapta = pibPerCapta.slice(9, -2);
    //       pibPerCaptaN = parseInt(pibPerCapta);
    //       pibPerCapta = (pibPerCaptaN).toLocaleString('pt-BR');
    //     }
    //     else if (items.indicador === "Economia - Total do PIB") {
    //       pibTotal = JSON.stringify(items.series[0].serie[49]);
    //       pibTotal = pibTotal.slice(9, -2);
    //       pibTotalN = parseInt(pibTotal);
    //       pibTotal = (pibTotalN).toLocaleString('pt-BR');
    //     }
    //     else if (items.indicador === "Economia - Chegada de turistas") {
    //       turistasTotal = JSON.stringify(items.series[0].serie[48]);
    //       turistasTotal = turistasTotal.slice(9, -2);
    //       turistasTotalN = parseInt(turistasTotal);
    //       turistasTotal = (turistasTotalN).toLocaleString('pt-BR');
    //     }
    //     else if (items.indicador === "Economia - Total de exportações") {
    //       exportacoesTotal = JSON.stringify(items.series[0].serie[48]);
    //       exportacoesTotal = exportacoesTotal.slice(9, -2);
    //       exportacoesTotalN = parseInt(exportacoesTotal);
    //       exportacoesTotal = (exportacoesTotalN).toLocaleString('pt-BR');
    //     }
    //     else if (items.indicador === "Economia - Total de importações") {
    //       importacoesTotal = JSON.stringify(items.series[0].serie[48]);
    //       importacoesTotal = importacoesTotal.slice(9, -2);
    //       importacoesTotalN = parseInt(importacoesTotal);
    //       importacoesTotal = (importacoesTotalN).toLocaleString('pt-BR');
    //     }
    //     //matriculas %
    //     else if (items.id === 77835) {
    //       matriculasTotal = JSON.stringify(items.series[0].serie[49]);
    //       matriculasTotal = matriculasTotal.slice(9, -2);
    //     } 
    //     // alfabetização %
    //     else if (items.id === 77836) {
    //       alfabetizacaoTotal = JSON.stringify(items.series[0].serie[49]);
    //       alfabetizacaoTotal = alfabetizacaoTotal.slice(9, -2);
    //     }
    //     // subnutrição %
    //     else if (items.id === 77834) {
    //       subnutricaoTotal = JSON.stringify(items.series[0].serie[47]);
    //       subnutricaoTotal = subnutricaoTotal.slice(9, -2);
    //     }
    //     // expectativa de vida
    //     else if (items.id === 77830) {
    //       expectativaTotal = JSON.stringify(items.series[0].serie[48]);
    //       expectativaTotal = expectativaTotal.slice(9, -2);
    //     }
    //     // idh %
    //     else if (items.id === 77831) {
    //       idhTotal = JSON.stringify(items.series[0].serie[48]);
    //       idhTotal = idhTotal.slice(9, -2);
    //     }
    //     // Taxa de natalidade por mil
    //     else if (items.id === 77851) {
    //       natalidadeTotal = JSON.stringify(items.series[0].serie[48]);
    //       natalidadeTotal = natalidadeTotal.slice(9, -2);
    //     }
    //     // mortalidade por mil
    //     else if (items.id === 77850) {
    //       mortalidadeTotal = JSON.stringify(items.series[0].serie[48]);
    //       mortalidadeTotal = mortalidadeTotal.slice(9, -2);
    //     }
    //     // Assinaturas de telefonia celular a cada 100 habitantes
    //     else if (items.id === 77854) {
    //       assinaturasTotal = JSON.stringify(items.series[0].serie[48]);
    //       assinaturasTotal = assinaturasTotal.slice(9, -2);
    //     }
    //     // Percentual de usuários de Internet %
    //     else if (items.id === 77857) {
    //       percentualTotal = JSON.stringify(items.series[0].serie[48]);
    //       percentualTotal = percentualTotal.slice(9, -2);
    //     }
    // }
}