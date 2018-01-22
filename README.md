# begeta-prototype
- [Github](https://github.com/Sellsuki/begeta)
- [Scss guide](http://sass-lang.com/guide)
- [Inspiration](https://github.com/BioMaRu/biomatic)

# Syncing a fork to sellsuki/begeta
 ## command line step
 1. Fetch the branches and their respective commits from the upstream repository. Commits to `master` will be stored in a local branch, `upstream/master`.
 ```shell 
$ git fetch upstream
remote: Counting objects: 75, done.
remote: Compressing objects: 100% (53/53), done.
remote: Total 62 (delta 27), reused 44 (delta 9)
Unpacking objects: 100% (62/62), done.
From https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY
 * [new branch]      master     -> upstream/master
```
 2. Check out your fork's local `master` branch.
```shell 
$ git checkout master
Switched to branch 'master'
 ```
 3. Merge the changes from `upstream/master` into your local `master` branch. This brings your fork's `master` branch into sync with the upstream repository, without losing your local changes.
  ```shell 
$ git merge upstream/master
Updating a422352..5fdff0f
Fast-forward
    README                    |    9 -------
    README.md                 |    7 ++++++
    2 files changed, 7 insertions(+), 9 deletions(-)
    delete mode 100644 README
    create mode 100644 README.md
 ```
 > If your local branch didn't have any unique commits, Git will instead perform a "fast-forward":
 ```shell 
 $ git merge upstream/master
Updating 34e91da..16c56ad
Fast-forward
  README.md                 |    5 +++--
  1 file changed, 3 insertions(+), 2 deletions(-)
 ```
 
#install
1. npm install || yarn
2. npm run build || yarn build
