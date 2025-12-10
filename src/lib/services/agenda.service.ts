import { http } from "../api/http";
import { Programation } from "../models/programation";

export const AgendaService = {
    getNextDays: async () => await http<{data: Programation[]}>("agenda/next-days").then(res => res.data),
}