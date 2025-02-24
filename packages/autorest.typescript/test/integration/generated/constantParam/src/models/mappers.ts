/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const LanguageBatchInput: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LanguageBatchInput",
    modelProperties: {
      documents: {
        serializedName: "documents",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LanguageInput"
            }
          }
        }
      }
    }
  }
};

export const LanguageInput: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LanguageInput",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      text: {
        serializedName: "text",
        required: true,
        type: {
          name: "String"
        }
      },
      countryHint: {
        serializedName: "countryHint",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LanguageResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LanguageResult",
    modelProperties: {
      documents: {
        serializedName: "documents",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentLanguage"
            }
          }
        }
      },
      errors: {
        serializedName: "errors",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentError"
            }
          }
        }
      },
      statistics: {
        serializedName: "statistics",
        type: {
          name: "Composite",
          className: "RequestStatistics"
        }
      },
      modelVersion: {
        serializedName: "modelVersion",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DocumentLanguage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentLanguage",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      detectedLanguage: {
        serializedName: "detectedLanguage",
        type: {
          name: "Composite",
          className: "DetectedLanguage"
        }
      },
      warnings: {
        serializedName: "warnings",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TextAnalyticsWarning"
            }
          }
        }
      },
      statistics: {
        serializedName: "statistics",
        type: {
          name: "Composite",
          className: "DocumentStatistics"
        }
      }
    }
  }
};

export const DetectedLanguage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DetectedLanguage",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      iso6391Name: {
        serializedName: "iso6391Name",
        required: true,
        type: {
          name: "String"
        }
      },
      confidenceScore: {
        serializedName: "confidenceScore",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const TextAnalyticsWarning: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TextAnalyticsWarning",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String"
        }
      },
      targetRef: {
        serializedName: "targetRef",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DocumentStatistics: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentStatistics",
    modelProperties: {
      charactersCount: {
        serializedName: "charactersCount",
        required: true,
        type: {
          name: "Number"
        }
      },
      transactionsCount: {
        serializedName: "transactionsCount",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DocumentError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentError",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "TextAnalyticsError"
        }
      }
    }
  }
};

export const TextAnalyticsError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TextAnalyticsError",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "InvalidRequest",
            "InvalidArgument",
            "InternalServerError",
            "ServiceUnavailable",
            "NotFound"
          ]
        }
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      innererror: {
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "InnerError"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TextAnalyticsError"
            }
          }
        }
      }
    }
  }
};

export const InnerError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InnerError",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      innererror: {
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "InnerError"
        }
      }
    }
  }
};

export const RequestStatistics: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RequestStatistics",
    modelProperties: {
      documentsCount: {
        serializedName: "documentsCount",
        required: true,
        type: {
          name: "Number"
        }
      },
      validDocumentsCount: {
        serializedName: "validDocumentsCount",
        required: true,
        type: {
          name: "Number"
        }
      },
      erroneousDocumentsCount: {
        serializedName: "erroneousDocumentsCount",
        required: true,
        type: {
          name: "Number"
        }
      },
      transactionsCount: {
        serializedName: "transactionsCount",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "TextAnalyticsError"
        }
      }
    }
  }
};
