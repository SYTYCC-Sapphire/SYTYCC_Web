## SYTYCC_Web
<br />
So You Think You Can Code (SYTYCC) Web, is a website developed for a community of tech-savvies learning, growing and working together on real world projects. 
<br />
<br />

### Guide for Contributing
<br />
For effective contributions, please follow these instructions; If you wish to add more guideslines and spice things abit, please contact the appropraite lead or CTO.

Previous contributors should can switch to the current organization repository using `git remote set-url origin *new_url*` 
<br />

- Create a personal fork of the project on Github.
- Clone the fork on your local machine. Your remote repo on Github is called `origin`.
  - Clone the fork using `git clone forked-repo-url` on your CLI.
  <br />
- Add the original repository as a remote called `upstream`.
  - Config upstream repo using `git remote add upstream original-repo-url` on your CLI.
  <br />
- If you created your fork a while ago be sure to pull upstream changes into your local repository.
  - Pull recent changes from upstream using `git pull upstream name-of-branch` on your CLI.
  <br />
- Once your clone is setup and up-to-date on your local machine. Create a new branch to work on! Branch from develop if it exists, else from master.
  - Create a new branch using `git checkout -B name-of-new-branch` on your CLI.
  <br />
- Implement/fix your feature, comment your code before pushing to your forked repo.
  - `git pull upstream name-of-branch` to pull recent changes before pushing.
  - Fix and merge any conflicts or changes in your local copy.
  - `git add file-name` to add the file with the new feature.
  - `git commit -m "short descript of the feature"` to comment.
  <br />
- Please make sure to follow the code style of the project, including indentation.
- If the project has tests run them!
- Write or adapt tests as needed, *Optional!*.
- Squash your commits into a single commit with [git's interactive rebase](https://docs.github.com/en/get-started/using-git/about-git-rebase). Create a new branch if necessary, *Optional*.
- Push your branch to your fork on Github, the remote `origin`.
  - Push to your branch using `git push origin name-of-branch` on your CLI.
  <br />
- From your fork open a pull request in the correct branch housing your changes. Target the main repo's `develop` branch.
- If the maintainer or reviewer requests further changes or fixes to your pull request, please comply. The PR will be merged only if they met requirements, have been tested accordingly and are without errors or bug fixes.
- Once the pull request is approved and merged you can pull the changes from upstream to your local repo and choose to delete or continue with your extra branch(es).
- **Last but not least:** Always write your commit messages in the present tense. Your commit message should describe what the commit is about, what the code does when applied – not what you did to the code.