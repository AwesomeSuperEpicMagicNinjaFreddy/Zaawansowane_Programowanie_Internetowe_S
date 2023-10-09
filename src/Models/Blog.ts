class  Blog {
  private _id: number;
  private _name: string;
  private _author: Author;
  private _articles: Article[];
  private static static_objectCounter: number = 0;

    constructor(id: number, name: string, author: Author) {
        this._id = id;
        this._name = name;
        this._author = author;
        this._articles = [];
        Blog.static_objectCounter++;
    }

    get id():number { return this._id;}

    get name():string { return this._name;}
    set name(value:string) { this._name = value; }

    get author():Author { return this._author;}
    set author(value:Author) { this._author = value; }

    get articles():Article[] { return this._articles;}
    set articles(value:Article[]) { this._articles = value; }

    public addArticle(article: Article): void {
      this._articles.push(article);
    }
    
    public getArticleTitles(): string[] {
      return this._articles.map((article) => article.title);
    }
    
    public getArticle(articleId: number): Article | undefined {
      return this._articles.find(article => article.id === articleId);
    }
    
}