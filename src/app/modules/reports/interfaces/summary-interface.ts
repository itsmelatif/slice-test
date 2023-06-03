export interface ISummary {
    summary: IListSummary
}

export interface IListSummary {
  campaignName: string;
  channel: string;
  postType: string;
  startDate: Date;
  endDate: Date;
  totalSpend: number;
  reach: number;
  impressions: number;
  followers: number;
  likes: number;
  comments:number;
  shares: number;
  saves: number;
  clicks: number;
  ctr: number;
  totalEngagements: number;
  engagementRate: number;
  cpr: number;
  cpv: number;
  cpi: number;
  cpe: number;
  reachPercentage: number;
  chartEngagementByType: {
    likes: number;
    comments: number;
    saves: number;
  },
  chartTargetVsActualImpression: {
    targetER: number;
    realER: number;
  }  
}