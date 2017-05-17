# Commitizen Keep A Changelog

This is a [commitizen](http://commitizen.github.io/cz-cli/) plugin to make the writing of commit messages consistent with http://keepachangelog.com/en/0.3.0/ across a repo.

## Usage

```
git add ./some/file/to/add
git cz
```

## Install

```
npm install -g cz-keep-a-changelog
```

If you don't have commitizen yet:

```
npm install -g commitizen
```

Once you have commitizen, add the following to your package.json.

```
"czConfig": {
  "path": "./node_modules/cz-keep-a-changelog/"
}
```
