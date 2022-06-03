export class Testimonials {
  constructor(
    public profession: Testimonial[],
    public community: Testimonial[],
  ) {}
}

export class Testimonial {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public avatarUrl: string,
    public profileUrl: string,
    public designation: string,
    public message: string,
    public isCollege: boolean,
    public isFromCommunity: boolean,
  ) {}
}

enum InteractionEvent {
  SetAsCollege,
  SetAsExCollege,
  SetAsCommunityInteraction,
  SetAsArticleReviewer,
  SetAsOpenSourceProjectContributor,
  SetAsOpenSourceFeatureContributor,
  SetAsOpenSourceBugContributor,
  SetAsMentee,
  SubmittedTestimonial,
  LikedArticle,
  Others,
}

export class Interaction {
  constructor(
    public id: string,
    public interactionUserId: string,
    public interactionMessage: string,
    public interactionType: InteractionEvent,
    public interactionTypeId: string,
  ) {}
}

enum WellWisherRelation {
  College,
  Community,
  ExCollege,
}

export class WellWisher {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public avatarUrl: string,
    public profileUrl: string,
    public designation: string,
    public description: string,
    public relation: WellWisherRelation,
    public interactionLogIds: string[],
  ) {}
}
