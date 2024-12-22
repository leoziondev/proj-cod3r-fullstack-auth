export default interface CasoDeUso2<E1, E2> {
    executar(entrada1: E1, entrada2: E2): Promise<void>
}
