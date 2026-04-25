import { Injectable } from "@nestjs/common";

@Injectable()
export class SyncService {
  async logSync(type: string, payload: any, status: string) {
    console.log(`[SYNC] ${type} - ${status}`, payload);
    return true;
  }

  async batchSync(data: any[]) {
    console.log("Batch Sync Received:", data);
    return { success: true };
  }
}
