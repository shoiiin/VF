<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">

<h2>Main page</h2>
<hr />
Cache actions
<ul>
    <li class="link" onclick="CallAJAX_HTML('<%=Url.Action("ClearCache","Main")%>')">Clear cache</li>
</ul>
<hr />
Controller actions types
<ul>
    <li class="link" onclick="LoadPage('<%=Url.Action("NewPage","Main")%>')">Load page</li>
    <li class="link" onclick="CallAJAX_HTML('<%=Url.Action("AJAX_HTML","Main")%>')">AJAX-HTML call</li>
    <li class="link" onclick="CallAJAX_JSON('<%=Url.Action("AJAX_JSON","Main")%>')">AJAX-JSON call</li>
    <li class="link" onclick="CallAJAX_HTML('<%=Url.Action("WCF","Main")%>')">WCF service call</li>
</ul>

<hr />
Controller error handling
<ul>
    <li class="link" onclick="LoadPage('<%=Url.Action("NewPage","Main")%>','ERROR')">Load page (throws Exception)</li>
    <li class="link" onclick="CallAJAX_HTML('<%=Url.Action("AJAX_HTML","Main")%>','ERROR')">AJAX-HTML call (throws SecurityException)</li>
    <li class="link" onclick="CallAJAX_JSON('<%=Url.Action("AJAX_JSON","Main")%>','ERROR')">AJAX-JSON call (throw ApplicationException)</li>
    <li class="link" onclick="CallAJAX_HTML('<%=Url.Action("WCF","Main")%>','ERROR')">WCF service call</li>
</ul>

<hr />
IIS errors - not handled by MVC (HTTP 404, etc)
<ul>
    <li class="link" onclick="LoadPage('<%=Url.Action("404","Main")%>','ERROR')">Load page</li>
    <li class="link" onclick="CallAJAX_HTML('<%=Url.Action("404","Main")%>','ERROR')">AJAX-HTML call</li>
    <li class="link" onclick="CallAJAX_JSON('<%=Url.Action("404","Main")%>','ERROR')">AJAX-JSON call</li>
</ul>
<hr />
Patterns
<ul>
    <li class="link" onclick="CallAJAX_HTML('<%=Url.Action("DependencyInjection","Main")%>')">Dependency injection</li>
</ul>

</asp:Content>
