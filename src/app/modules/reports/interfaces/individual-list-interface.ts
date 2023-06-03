export interface IReportsDetail{
    individualList: IIndividualList[];
    pageable: IIndividualPage;
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    },
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}

export interface IIndividualList {
    proposalId: string;
    creatorId: string;
    creatorName: string;
    channel: string;
    postType: string;
    followersCount: number;
    engagementRate: number;
    cpr: number;
    cpe: number;
    price: number;
    reach: number;
    impressions: number;
    views: number;
    likes: number;
    comment: number;
    shares: number;
    clicks: number;
    platformContentId?: number;
}

export interface IIndividualPage {
    sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
    },
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
}