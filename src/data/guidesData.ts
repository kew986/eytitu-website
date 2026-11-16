export type UserRole = 'driver' | 'passenger' | 'operator';
export type VideoLanguage = 'en' | 'fil';

export interface TutorialItem {
  id: string;
  number: string;
  topicHeadline: {
    en: string;
    fil: string;
  };
  topicDescription: {
    en: string;
    fil: string;
  };
  videoTitle: {
    en: string;
    fil: string;
  };
  videoDescription: {
    en: string;
    fil: string;
  };
  thumbnailUrl: {
    en: string;
    fil: string;
  };
  videoUrl: {
    en: string;
    fil: string;
  };
  downloadPdfUrl?: string; // Only displayed when verified downloadable guide exists
  breakdowns?: {           // Only displayed when verified video tips/breakdowns exist
    id: string;
    stepNumber: number;
    title: { en: string; fil: string };
    duration?: string;
    videoUrl?: string;
  }[];
}

export interface RoleGuidesData {
  role: UserRole;
  roleLabel: {
    en: string;
    fil: string;
  };
  sidebarTitle: {
    en: string;
    fil: string;
  };
  emptyState: {
    heading: {
      en: string;
      fil: string;
    };
    description: {
      en: string;
      fil: string;
    };
  };
  tutorials: TutorialItem[];
}

export const guidesData: Record<UserRole, RoleGuidesData> = {
  driver: {
    role: 'driver',
    roleLabel: {
      en: 'Driver',
      fil: 'Driver'
    },
    sidebarTitle: {
      en: 'Driver guides',
      fil: 'Driver guides'
    },
    emptyState: {
      heading: {
        en: 'Driver guides coming soon.',
        fil: 'Driver guides coming soon.'
      },
      description: {
        en: 'Step-by-step tutorials for using 82 as a driver will be available here.',
        fil: 'Abangan ang step-by-step tutorials kung paano gamitin ang 82 bilang driver.'
      }
    },
    tutorials: [
      {
        id: 'getting-started',
        number: '01',
        topicHeadline: {
          en: 'Getting started',
          fil: 'Pagsisimula sa 82'
        },
        topicDescription: {
          en: 'Familiarize yourself with the essentials of using 82 as a driver.',
          fil: 'Alamin ang mga basic na kailangan para magamit ang 82 bilang driver.'
        },
        videoTitle: {
          en: 'Your introduction to 82',
          fil: 'Kilalanin ang 82 app'
        },
        videoDescription: {
          en: 'Explore the app and learn where to begin.',
          fil: 'I-explore ang app at alamin kung saan magsisimula.'
        },
        thumbnailUrl: {
          en: '/thumbnails/driver-01-en.jpg',
          fil: '/thumbnails/driver-01-fil.jpg'
        },
        videoUrl: {
          en: 'https://pin4ms.bblabs.dev/q/901b294d4426455386ffe480077b1fa47936ad723a23aa4fa0e44198e99fad85',
          fil: 'https://pin4ms.bblabs.dev/q/c8aa5298f8cb72a05f8f6a629394529371b33f5ee3287f7b78d3c7eb1c91a164'
        }
      },
      {
        id: 'setting-up-profile',
        number: '02',
        topicHeadline: {
          en: 'Driver setup',
          fil: 'Driver setup'
        },
        topicDescription: {
          en: 'Prepare your driver profile before starting your workday.',
          fil: 'Ihanda ang iyong driver profile bago magsimulang bumiyahe.'
        },
        videoTitle: {
          en: 'Setting up your driver profile',
          fil: 'Pag-set up ng driver profile'
        },
        videoDescription: {
          en: 'Follow the steps to complete your driver setup in the app.',
          fil: 'Sundin ang mga steps para makumpleto ang iyong setup sa app.'
        },
        thumbnailUrl: {
          en: '/thumbnails/driver-02-en.jpg',
          fil: '/thumbnails/driver-02-fil.jpg'
        },
        videoUrl: {
          en: 'https://pin4ms.bblabs.dev/q/def30321be87b9dde06e9bdf306b8e96f8f3c20a5e7c28d2ad5261ab43a7f9e4',
          fil: 'https://pin4ms.bblabs.dev/q/d74a39ba5e868c8021ba2f8d9000b14242b7c2b3b5cdf2d40670da2c1b41b30a'
        }
      },
      {
        id: 'starting-ending-duty',
        number: '03',
        topicHeadline: {
          en: 'Starting and ending duty',
          fil: 'Pag-start at pag-end ng duty'
        },
        topicDescription: {
          en: 'Manage your availability and work hours through the 82 app.',
          fil: 'I-manage ang iyong availability at oras ng trabaho gamit ang 82 app.'
        },
        videoTitle: {
          en: 'Managing your duty status',
          fil: 'Pag-manage ng duty status'
        },
        videoDescription: {
          en: 'Follow the steps to go on duty and go off duty when finished.',
          fil: 'Alamin kung paano mag-on duty at mag-off duty pagkatapos bumiyahe.'
        },
        thumbnailUrl: {
          en: '/thumbnails/driver-03-en.jpg',
          fil: '/thumbnails/driver-03-fil.jpg'
        },
        videoUrl: {
          en: 'https://pin4ms.bblabs.dev/q/3a0196d848b3ebd0c3da844723fafb2d6e182404ff56abd328cef452051f6f9e',
          fil: 'https://pin4ms.bblabs.dev/q/d4708e3d5efd774daf320834902b00cf602a9a58961566e9a8cd8aae418beea0'
        }
      }
    ]
  },
  passenger: {
    role: 'passenger',
    roleLabel: {
      en: 'Passenger',
      fil: 'Passenger'
    },
    sidebarTitle: {
      en: 'Passenger guides',
      fil: 'Passenger guides'
    },
    emptyState: {
      heading: {
        en: 'Passenger guides coming soon.',
        fil: 'Passenger guides coming soon.'
      },
      description: {
        en: 'Step-by-step tutorials for using 82 as a passenger will be available here.',
        fil: 'Abangan ang step-by-step tutorials kung paano gamitin ang 82 bilang passenger.'
      }
    },
    tutorials: []
  },
  operator: {
    role: 'operator',
    roleLabel: {
      en: 'Operator',
      fil: 'Operator'
    },
    sidebarTitle: {
      en: 'Operator guides',
      fil: 'Operator guides'
    },
    emptyState: {
      heading: {
        en: 'Operator guides coming soon.',
        fil: 'Operator guides coming soon.'
      },
      description: {
        en: 'Tutorials for managing your fleet and operator workflows will be available here.',
        fil: 'Abangan ang mga tutorial para sa pag-manage ng iyong fleet gamit ang 82.'
      }
    },
    tutorials: []
  }
};
