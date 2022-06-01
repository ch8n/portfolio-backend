class OpenSourceCommunity {
  constructor(
    public sessionHosted: SessionHosted[],
    public sessionConducted: SessionDetails[],
    public githubContributions: GithubContribution[],
    public mentoring: MenteeProfile[],
    public openSourceProjects: OpenSourceProjects[],
  ) {}
}

enum OpenSourceProjectStatus {
  InProgress,
  Completed,
  Archived,
}

class OpenSourceProjects {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public url: string,
    public stars: string,
    public Forks: string,
    public screenshots: string[],
    public demoUrl: string[],
    public technologies: string[],
    public projectStats: OpenSourceProjectStatus[],
  ) {}
}

class MenteeProfile {
  constructor(
    public id: string,
    public name: string,
    public avatarUrl: string,
    public profileUrl: string,
    public designation: boolean,
    public teachings: string[],
    public technologies: string[],
    public feedback: string[],
  ) {}
}

enum OpenSourceContributionType {
  BugFix,
  Feature,
  Support,
  Application,
}

enum OpenSourceContributionStatus {
  InProgress,
  Merged,
  Accepted,
  Rejected,
}

class GithubContribution {
  constructor(
    public id: string,
    public title: string,
    public issueUrl: string,
    public contributionUrl: string,
    public contributedDate: string,
    public projectDetails: ProjectDetails,
    public maintainer: MaintainerProfile[],
    public contributedType: OpenSourceContributionType,
    public contributedStatus: OpenSourceContributionType,
    public technologies: string[],
    public description: string,
  ) {}
}

class ProjectDetails {
  constructor(
    public name: string,
    public url: string,
    public stars: string,
    public maintainer: MaintainerProfile[],
    public description: string,
  ) {}
}

class MaintainerProfile {
  constructor(
    public name: string,
    public avatarUrl: string,
    public profileUrl: string,
    public isPrimary: boolean,
  ) {}
}

class SessionDetails {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public url: string,
    public thumbnail: string,
    public platform: string,
    public hostedDate: number,
    public technologies: string[],
    public showNotes: string[],
  ) {}
}

class SessionHosted {
  constructor(
    public id: string,
    public sessionDetails: SessionDetails,
    public speakers: SessionSpeaker[],
  ) {}
}

class SessionSpeaker {
  constructor(
    public speakerName: string,
    public speakerProfile: string,
    public aboutSpeaker: string,
  ) {}
}
