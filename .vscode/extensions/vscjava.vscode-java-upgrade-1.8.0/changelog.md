### 1.8.0

- added support for upgrading to Java 25.
- added support for custom guidelines.
- added support for reusing current branch as upgrade working branch.
- renamed some tools to avoid excessively long names.
- fixed CVE issue rendering bug in progress.md
- fixed some labels.

### 1.7.1

- fixed the bug that copilot plan is not correctly detected.

### 1.7.0

- changed validation tools to only return issues that need to be fixed.
- fixed bug that java upgrade tools is not stopped after agent session is cancelled.

### 1.6.1

- fix version parsing error when validating CVEs.

### 1.6.0

- reduced token consumption and improved success rate.

### 1.5.0

- added tools to install jdk/maven.
- fixed error when invoking java upgrade tools in empty workspace.
- removed the default encoding settings.
- show the build command in progress.md.
- mitigated the issue caused by the inconsistency between the provided JDK and Java versions.
- added validation to ensure the version of provided JDK and required Java version match exactly.

### 1.4.0

- validation tasks are grouped.
- added tools to list local jdk/maven installations.
- fixed bug: agent may pass dependencies without versions to validate cves.
- fixed bug: file links in markdown files are wrong and not clickable.
- fixed bug: build tool customization in plan.md doesn't work sometimes.
- fixed some other known issues.
- enhanced the error fixing capabilities of agent.

### 1.3.1

- fixed a bug that build task has no next task instruction.
- fixed the bug that the file links of behavior changes are linked to wrong path.
- fixed some other known issues.

### 1.3.0

- changed to reuse it if specified working branch already exists.
- settings id/description is changed (be general) to be shared among modernization extensions.
- add build progress under build task.

### 1.2.0

- added setting to allow user configuring command timeout.
- added "Setup Development Environment" step.
    - deferred jdk/build tool validation and setup to "Setup Development Environment" step.
- added note message for automatic uncommitted changes handling.
- enhanced jdk detection logic.
- fixed some know issues.
- updated upgrade session id and working branch name format.

### 1.1.0

#### Changed

- stash uncommitted changes by default
    - added setting to change default behavior for uncommitted changes.

#### Fixed

- OpenRewrite task failure may corrupt the progress.md
- Failed to get java version for some OpenJDK distributions

### 1.0.0

#### Changed

- Confirmation is required before generating upgrade plan.
    - User can alter upgrade goal before generating plan.

#### Fixed

- Mitigated the issue that vscode agent may not pass sessionId to tools.
- Fixed the issue that no code changes are committed sometimes.
- Improved stability of behavior change validation.

### 0.21.0

#### Added

- Added support for upgrading SpringFramework and Java/Jakarta EE
- Added support for upgrade to Spring Boot 3.5
- Added support for upgrading any dependencies

#### Changed

- Changed to hierarchy task view to show upgrading progress.
- Changed to ask for user input in chat instead of quick-pick by default.
    - user can still change this via user settings.
- Improved stability of behavior consistency check.
- Improved tool calling order stability.
- Always use user selected model to send requests from tools.

#### Fixed

- Fixed issue: withdraws CVEs are also listed.
- Fixed issue that failing to run tests was treated as test success.

### 0.20.2

- Fixed error "model_not_supported".

### 0.19.0

#### Changed

- Users with GitHub Copilot "individual_pro" plan can also use this extension.
- These tools can be called outside upgrade session now:
    - 'build_java_project'
    - 'commit_code_changes'
    - 'generate_tests_for_java'
    - 'run_tests_for_java'
    - 'validate_behavior_changes_for_java'
    - 'validate_cves_for_java'

### v0.17.0

#### Added

- added code change short stats message in task.
- added alert if third-party extension tools are not enabled.
- expanded search locations for JDK and Maven

#### Changed

- build&fix code changes will only be committed when build passed.

#### Fixed

- fixed bug that code changes may not be committed.
- fixed issue that user may got 403 when accessing llm.

### v0.15.0

- added configuration item to set whether to run tests.
- fixed git-validation related issues.
- fixed some known issues.

### v0.14.0

- updated readme
- fixed some known issues.

### v0.13.1

#### Fixed

- Fixed name capitalization

### v0.13.0

initial release
